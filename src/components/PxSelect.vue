<template>
  <div
    :class="[
      'Px-select',
      { 'Px-select--required': isRequired && !disabled && !readOnly },
      { 'Px-select--invalid': isInvalid },
      { 'Px-select--disabled': disabled },
      { 'Px-select--readonly': readOnly },
      { 'Px-select--open': isOpen },
    ]"
  >
    <div class="Px-select__label-wrapper" v-if="label">
      <label class="Px-select__label" :for="inputId">{{ label }}</label>
    </div>

    <div
      ref="reference"
      class="Px-select__control"
      role="combobox"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-controls="dropdownId"
      :aria-activedescendant="activeDescendantId"
      @click="onControlClick"
    >
      <input
        ref="searchInput"
        class="Px-select__search"
        :id="inputId"
        :value="inputValue"
        :placeholder="inputPlaceholder"
        :readonly="!isSearchable || !isOpen"
        :required="isRequired && !disabled && !readOnly"
        :aria-invalid="isInvalid || undefined"
        :aria-label="!label ? ariaLabel : undefined"
        :disabled="disabled"
        autocomplete="off"
        @click.stop="onInputClick"
        @input="onSearchInput"
        @keydown="onKeydown"
      />
      <span
        class="Px-select__indicator"
        :class="{ 'Px-select__indicator--open': isOpen }"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>

    <Teleport to="body">
      <ul
        v-if="isOpen"
        ref="floating"
        :id="dropdownId"
        class="Px-select__dropdown"
        :style="floatingStyles"
        role="listbox"
        :aria-label="label || ariaLabel"
      >
        <li
          v-for="(option, index) in filteredOptions"
          :key="String(getOptionValue(option))"
          :id="`${dropdownId}-option-${index}`"
          class="Px-select__option"
          :class="{
            'Px-select__option--selected': isSelected(option),
            'Px-select__option--highlighted': highlightedIndex === index,
          }"
          role="option"
          :aria-selected="isSelected(option)"
          @click.stop="selectOption(option)"
          @mouseenter="highlightedIndex = index"
        >
          {{ getOptionLabel(option) }}
        </li>
        <li
          v-if="filteredOptions.length === 0"
          class="Px-select__option Px-select__option--empty"
          role="option"
          aria-disabled="true"
        >
          No options found
        </li>
      </ul>
    </Teleport>

    <div class="Px-select__message-wrapper">
      <div v-if="isInvalid && errorMessage">{{ errorMessage }}</div>
      <div v-else-if="helperMessage">{{ helperMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, nextTick, useId } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift, size } from '@floating-ui/vue'

const props = withDefaults(defineProps<{
  ariaLabel?: string
  disabled?: boolean
  errorMessage?: string
  helperMessage?: string
  id?: string
  isInvalid?: boolean
  isRequired?: boolean
  label?: string
  modelValue?: string | number | null
  options?: Array<string | Record<string, any>>
  placeholder?: string
  readOnly?: boolean
  searchable?: boolean
}>(), {
  searchable: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
}>()

const reference = ref<HTMLElement | null>(null)
const floating = ref<HTMLElement | null>(null)
const searchInput = ref<HTMLInputElement | null>(null)

const isOpen = ref(false)
const searchQuery = ref('')
const highlightedIndex = ref(-1)

const uid = useId()
const inputId = computed(() => props.id ?? `${uid}-input`)
const dropdownId = computed(() => `${uid}-dropdown`)
const activeDescendantId = computed(() =>
  isOpen.value && highlightedIndex.value >= 0
    ? `${dropdownId.value}-option-${highlightedIndex.value}`
    : undefined
)

const isSearchable = computed(() => props.searchable && !props.readOnly)

const { floatingStyles } = useFloating(reference, floating, {
  placement: 'bottom-start',
  whileElementsMounted: autoUpdate,
  middleware: [
    offset(8),
    flip(),
    shift({ padding: 8 }),
    size({
      apply({ rects, elements }) {
        Object.assign(elements.floating.style, {
          width: `${rects.reference.width}px`,
        })
      },
    }),
  ],
})

watchEffect((onCleanup) => {
  if (!isOpen.value) return
  const onPointerDown = (e: PointerEvent) => {
    if (
      !reference.value?.contains(e.target as Node) &&
      !floating.value?.contains(e.target as Node)
    ) {
      close()
    }
  }
  document.addEventListener('pointerdown', onPointerDown)
  onCleanup(() => document.removeEventListener('pointerdown', onPointerDown))
})

const getOptionLabel = (option: string | Record<string, any>): string => {
  if (typeof option === 'string') return option
  return String(option.label ?? option.value ?? '')
}

const getOptionValue = (option: string | Record<string, any>): string | number => {
  if (typeof option === 'string') return option
  return option.value ?? option.label ?? ''
}

const isSelected = (option: string | Record<string, any>): boolean =>
  getOptionValue(option) === props.modelValue

const displayValue = computed(() => {
  if (props.modelValue == null || props.modelValue === '') return ''
  const match = (props.options ?? []).find(o => getOptionValue(o) === props.modelValue)
  return match ? getOptionLabel(match) : String(props.modelValue)
})

const filteredOptions = computed(() => {
  const all = props.options ?? []
  if (!isSearchable.value || !searchQuery.value) return all
  const q = searchQuery.value.toLowerCase()
  return all.filter(o => getOptionLabel(o).toLowerCase().includes(q))
})

const inputValue = computed(() =>
  isOpen.value && isSearchable.value ? searchQuery.value : displayValue.value
)

const inputPlaceholder = computed(() => {
  if (isOpen.value && isSearchable.value && displayValue.value) return displayValue.value
  return props.placeholder ?? ''
})

const open = async () => {
  if (props.disabled || props.readOnly) return
  isOpen.value = true
  searchQuery.value = ''
  highlightedIndex.value = -1
  await nextTick()
  searchInput.value?.focus()
}

const close = () => {
  isOpen.value = false
  searchQuery.value = ''
  highlightedIndex.value = -1
}

const selectOption = (option: string | Record<string, any>) => {
  emit('update:modelValue', getOptionValue(option))
  close()
  nextTick(() => searchInput.value?.focus())
}

const onControlClick = () => {
  if (props.disabled || props.readOnly) return
  if (isOpen.value) close()
  else open()
}

const onInputClick = () => {
  if (props.disabled || props.readOnly) return
  if (!isOpen.value) open()
}

const onSearchInput = (e: Event) => {
  searchQuery.value = (e.target as HTMLInputElement).value
  highlightedIndex.value = 0
}

const onKeydown = (e: KeyboardEvent) => {
  if (props.disabled || props.readOnly) return
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      if (!isOpen.value) open()
      else highlightedIndex.value = Math.min(highlightedIndex.value + 1, filteredOptions.value.length - 1)
      break
    case 'ArrowUp':
      e.preventDefault()
      if (isOpen.value) highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      break
    case 'Enter':
      e.preventDefault()
      if (isOpen.value) {
        const opt = filteredOptions.value[highlightedIndex.value]
        if (opt) selectOption(opt)
      } else {
        open()
      }
      break
    case 'Escape':
      e.preventDefault()
      if (isOpen.value) close()
      break
    case ' ':
      if (!isSearchable.value || !isOpen.value) {
        e.preventDefault()
        if (!isOpen.value) open()
      }
      break
    case 'Tab':
      if (isOpen.value) close()
      break
  }
}
</script>

<style scoped>
.Px-select {
  display: flex;
  flex-direction: column;
  gap: var(--px-form-gap);
  width: 100%;
  font-family: var(--px-font-family-body);
  color: var(--px-form-text);
}

.Px-select__label-wrapper {
  padding: var(--px-form-wrapper-padding);
}

.Px-select__label {
  font-size: var(--px-font-size-body-sm);
}

.Px-select--required .Px-select__label::after {
  content: '*';
  color: var(--px-form-required);
  margin-left: var(--px-form-required-margin);
}

.Px-select__control {
  display: flex;
  align-items: center;
  gap: var(--px-select-control-gap);
  padding: var(--px-form-padding);
  border-radius: var(--px-form-border-radius);
  box-shadow: var(--px-form-shadow);
  background: var(--px-form-primary-bg);
  cursor: pointer;
  box-sizing: border-box;
}

.Px-select:hover:not(.Px-select--readonly):not(.Px-select--disabled) .Px-select__control {
  box-shadow: var(--px-form-shadow-hover);
}

.Px-select__control:has(.Px-select__search:focus) {
  box-shadow: var(--px-form-shadow-focus);
}

.Px-select--open .Px-select__control {
  box-shadow: var(--px-select-shadow-open);
}

.Px-select__search {
  flex: 1;
  min-width: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  outline: none;
  color: var(--px-form-text);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  cursor: pointer;

  &:read-write { cursor: text; }

  &::placeholder {
    color: var(--px-form-text-placeholder);
  }
}

.Px-select__indicator {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--px-color-text-subtle);
  transition: transform 0.2s ease;
}

.Px-select__indicator--open {
  transform: rotate(180deg);
}

.Px-select__dropdown {
  list-style: none;
  margin: 0;
  padding: var(--px-select-dropdown-padding);
  background: var(--px-form-primary-bg);
  border-radius: var(--px-form-border-radius);
  box-shadow: var(--px-select-dropdown-shadow);
  z-index: var(--px-select-dropdown-z-index);
  overflow-y: auto;
  max-height: var(--px-select-dropdown-max-height);
  box-sizing: border-box;
}

.Px-select__option {
  padding: var(--px-select-option-padding);
  border-radius: var(--px-select-option-border-radius);
  font-size: var(--px-font-size-body);
  color: var(--px-menu-item-text);
  cursor: pointer;

  &:hover,
  &.Px-select__option--highlighted {
    background: var(--px-menu-item-bg-hover);
  }

  &:active {
    background: var(--px-menu-item-bg-active);
  }

  &.Px-select__option--selected {
    font-weight: var(--px-font-weight-semibold);
  }

  &.Px-select__option--empty {
    color: var(--px-form-text-placeholder);
    font-size: var(--px-font-size-body-sm);
    cursor: default;
    pointer-events: none;
  }
}

.Px-select__message-wrapper {
  padding: var(--px-form-wrapper-padding);
  font-size: var(--px-font-size-caption);
}

.Px-select--invalid {
  .Px-select__control,
  .Px-select__search,
  .Px-select__message-wrapper {
    color: var(--px-form-required);
  }
}

.Px-select--disabled {
  pointer-events: none;

  .Px-select__control {
    box-shadow: var(--px-form-shadow-disabled);
  }

  .Px-select__search,
  .Px-select__label {
    color: var(--px-form-text-disabled);
  }
}

.Px-select--readonly {
  .Px-select__control {
    box-shadow: var(--px-form-shadow-readonly);
    cursor: default;
  }

  .Px-select__indicator {
    opacity: 0.5;
  }
}
</style>
