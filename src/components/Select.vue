<template>
    <div
    :class="[
          'Px-select',
          {'Px-select--required': isRequired && !disabled && !readOnly},
          {'Px-select--invalid': isInvalid},
          {'Px-select--disabled': disabled},
          {'Px-select--readonly': readOnly},
    ]"
  >
    <div class="Px-select__label-wrapper">
      <label class="Px-select__label" :for="id || generateAttribute('id')">{{ label }}</label>
    </div>
    <div class="Px-select__container">
      <v-select
        v-model="selectedValue"
        :options="options"
        :placeholder="placeholder"
        :disabled="disabled"
        :inputId="id"
      >
        <template #search="{attributes, events}">
          <input
            class="vs__search"
            :required="isRequired && !disabled && !readOnly"
            :aria-invalid="isInvalid"
            :readonly="readOnly"
            v-bind="attributes"
            v-on="events"
          />
        </template>
      </v-select>
    </div>
    <div class="Px-input__message-wrapper">
      <div v-if="isInvalid && errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const props = defineProps<{
  disabled?: boolean
  errorMessage?: string
  id?: string
  isRequired?: boolean
  isInvalid?: boolean
  label?: string
  modelValue?: string | number
  options: Array<string | Option>
  placeholder?: string
  readOnly?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue ?? null)

watch(selectedValue, (val) => emit('update:modelValue', val))
watch(() => props.modelValue, (val) => {
  selectedValue.value = val ?? null
})

const generateAttribute = (attribute: string): string | undefined => {
  if (!props.id && !props.label) return
  const id = props.id || props.label
  return `${id}-${attribute}`
}
</script>

<style>
:root {
  /* Shadows */
  --px-input-shadow: inset 3px 3px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-select-shadow-disabled: inset 2px 2px 3px #e0e0e0, inset -2px -2px 3px #f8f8f8;
  --vs-dropdown-box-shadow: var(--px-input-shadow);

  /* Sizing & spacing */
  --vs-border-radius: var(--px-space-100);
  --vs-dropdown-option-padding: var(--px-space-050) var(--px-space-150);
  --vs-border-width: 0px;

  /* Fonts */
  --vs-font-size: var(--px-space-200);
  --vs-line-height: unset;

  /* Colors */
  --vs-search-input-bg: #eeeeee;
  --vs-dropdown-bg: #eeeeee;
  --vs-state-disabled-bg: #eeeeee;
  --vs-dropdown-option-color: #1B1B1B;
  --vs-dropdown-option--active-bg: rgba(0, 120, 255, 0.25);
  --vs-dropdown-option--active-color: #1B1B1B;

  --px-select-text: #1B1B1B;
  --px-input-text-disabled: #A0A0A0;
}

/* Root select container */
.Px-select {
  display: flex;
  flex-direction: column;
  gap: var(--px-space-100);
  width: 100%;
  font-family: var(--px-font-family-body);
  color: var(--px-select-text);

  /* Label */
  .Px-select__label {
    font-size: var(--px-font-size-body-sm);
  }

  /* Input wrappers */
  .Px-input__label-wrapper,
  .Px-input__message-wrapper {
    padding: 0 var(--px-space-050);
  }

  .Px-input__message-wrapper {
    font-size: var(--px-font-size-caption);
  }

  /* Dropdown toggle */
  .vs__dropdown-toggle {
    border: none;
    box-shadow: var(--px-input-shadow);
    box-sizing: border-box;
    padding: var(--px-space-150);
  }

  /* Internal elements */
  .vs__search,
  .vs__actions,
  .vs__selected-options {
    padding: unset;
    margin: unset;
  }

  .vs__search,
  .vs__search:focus {
    letter-spacing: 1px;
  }

  /* Invalid state */
  &.Px-select--invalid {
    .vs__dropdown-toggle,
    .vs__dropdown-toggle::placeholder {
      color: var(--px-input-required);
    }
    .Px-input__message-wrapper {
      color: var(--px-input-required);
    }
  }

  /* Focus style */
  .vs__dropdown-toggle:has(.vs__search:focus:not(:disabled)) {
    outline: none;
    box-shadow:
      0 0 3px 2px rgba(0, 120, 255, 0.5),
      inset 2px 2px 2px rgba(0, 0, 0, 0.15),
      inset -2px -2px 2px rgba(255, 255, 255, 0.8);
  }

  /* Dropdown menu spacing */
  .vs__dropdown-menu {
    margin-top: 8px;
  }
}

/* Open state */
.vs--open .vs__dropdown-toggle {
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
  box-shadow: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
}

/* Disabled state */
.Px-select--disabled,
.Px-select--readonly {
  pointer-events: none;

  .vs__dropdown-toggle {
    box-shadow: var(--px-select-shadow-disabled);
  }

  .vs__search,
  .vs__search:focus,
  .Px-select__label {
    color: var(--px-input-text-disabled);
  }
}

/* Required indicator */
.Px-select--required {
  .Px-select__label::after {
    content: '*';
    color: var(--px-input-required);
    margin-left: var(--px-space-050);
  }
}
</style>
