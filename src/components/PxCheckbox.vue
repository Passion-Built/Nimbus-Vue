<template>
  <label
    :class="[
      'Px-checkbox',
      { 'Px-checkbox--required': isRequired },
      { 'Px-checkbox--indeterminate': indeterminate },
      { 'Px-checkbox--disabled': disabled },
      { 'Px-checkbox--invalid': isInvalid },
    ]"
  >
    <input
      class="Px-checkbox__input"
      ref="checkboxEl"
      type="checkbox"
      v-model="checkboxValue"
      :value="value"
      :name="name"
      :id="id || generateAttribute('id')"
      :required="isRequired"
      :disabled="disabled"
      :aria-invalid="isInvalid"
    />
    <span class="Px-checkbox__checkbox"></span>
    <span class="Px-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue'

const props = defineProps<{
  id?: string
  disabled?: boolean
  indeterminate?: boolean
  isRequired?: boolean
  isInvalid?: boolean
  modelValue?: boolean | (string | number)[]
  name?: string
  value?: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | (string | number)[]): void
}>()

const checkboxEl = ref<HTMLInputElement | null>(null)

const checkboxValue = computed({
  get: () => props.modelValue,
  set: (val: boolean | (string | number)[]) => emit('update:modelValue', val),
})

onMounted(() => {
  if (checkboxEl.value) checkboxEl.value.indeterminate = props.indeterminate ?? false
})

watch(() => props.indeterminate, (val) => {
  if (checkboxEl.value) checkboxEl.value.indeterminate = val ?? false
})

const generateAttribute = (attribute: string): string | undefined => {
  if (!props.id && !props.name) return
  const id = props.id || props.name
  return `${id}-${attribute}`
}
</script>

<style scoped>
.Px-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--px-checkbox-gap);
  cursor: pointer;
  font-family: var(--px-font-family-body);
  color: var(--px-color-text);
}

.Px-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Px-checkbox__checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--px-checkbox-size);
  height: var(--px-checkbox-size);
  border: var(--px-checkbox-border, none);
  border-radius: var(--px-checkbox-border-radius);
  background-color: var(--px-checkbox-bg);
  box-shadow: var(--px-checkbox-shadow);
  box-sizing: border-box;
  position: relative;
  transition:
    box-shadow var(--px-duration-state) var(--px-ease),
    background-color var(--px-duration-state) var(--px-ease);
}

.Px-checkbox__label {
  font-size: var(--px-font-size-body);
}

.Px-checkbox__input:focus-visible + .Px-checkbox__checkbox {
  outline: var(--px-focus-ring, none);
  outline-offset: var(--px-focus-offset, unset);
}

.Px-checkbox:not(.Px-checkbox--indeterminate) .Px-checkbox__input:checked + .Px-checkbox__checkbox {
  background-color: var(--px-checkbox-bg-checked);
  box-shadow: var(--px-checkbox-shadow-checked, none);
}

/* Checkmark */
.Px-checkbox:not(.Px-checkbox--indeterminate) .Px-checkbox__input:checked + .Px-checkbox__checkbox::after {
  content: '';
  display: block;
  width: 4px;
  height: 8px;
  border: solid var(--px-checkbox-check-color);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translateY(-1px);
}

/* Indeterminate state */
.Px-checkbox--indeterminate {
  .Px-checkbox__checkbox {
    background-color: var(--px-checkbox-bg-indeterminate);
    box-shadow: var(--px-checkbox-shadow-checked, none);
  }

  .Px-checkbox__checkbox::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 20%;
    width: 60%;
    height: 2px;
    background-color: var(--px-checkbox-dash-color);
    transform: translateY(-50%);
  }
}

/* Required indicator */
.Px-checkbox--required {
  .Px-checkbox__label::after {
    content: '*';
    color: var(--px-checkbox-required-color);
    margin-left: var(--px-checkbox-required-margin);
  }
}

/* Invalid state */
.Px-checkbox--invalid {
  .Px-checkbox__checkbox {
    border-color: var(--px-form-required);
  }

  .Px-checkbox__label {
    color: var(--px-form-required);
  }
}

/* Disabled state */
.Px-checkbox--disabled {
  cursor: not-allowed;

  .Px-checkbox__label {
    color: var(--px-color-text-disabled);
  }

  .Px-checkbox__checkbox {
    border: var(--px-checkbox-disabled-border, none);
    box-shadow: var(--px-checkbox-shadow-disabled, none);
  }
}
</style>
