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
        :searchable="readOnly ? false : true"
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
    <div class="Px-select__message-wrapper">
      <div v-if="isInvalid && errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { readonly, ref, watch } from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

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
/* Root select container */
.Px-select {
  display: flex;
  flex-direction: column;
  gap: var(--px-form-gap);
  width: 100%;
  font-family: var(--px-font-family-body);
  color: var(--px-form-text);

  /* Label */
  .Px-select__label {
    font-size: var(--px-font-size-body-sm);
  }

  /* Input wrappers */
  .Px-select__label-wrapper,
  .Px-select__message-wrapper {
    padding: var(--px-form-wrapper-padding);
  }

  .Px-select__message-wrapper {
    font-size: var(--px-font-size-caption);
  }

  /* Dropdown toggle */
  .vs__dropdown-toggle {
    border: none;
    box-shadow: var(--px-form-shadow);
    box-sizing: border-box;
    padding: var(--px-form-padding);
    border-radius: var(--px-form-border-radius);
  }

  /* Internal elements */
  .vs__search,
  .vs__actions,
  .vs__selected-options {
    padding: unset;
    margin: unset;
  }

  &:hover:not(.Px-select--readonly) {
    .vs__dropdown-toggle {
      box-shadow: var(--px-form-shadow-hover) !important;
      color: var(--px-form-text-placeholder-hover);
    }
  }

  .vs__search,
  .vs__search:focus {
    letter-spacing: 1px;
  }

  /* Invalid state */
  &.Px-select--invalid {
    .vs__dropdown-toggle,
    .Px-select__message-wrapper,
    .vs__selected {
      color: var(--px-form-required) !important;
    }
  }

  /* Focus style */
  .vs__dropdown-toggle:has(.vs__search:focus) {
    outline: none;
    box-shadow: var(--px-form-shadow-focus);
  }

  /* Dropdown menu spacing */
  .vs__dropdown-menu {
    margin-top: 8px;
    border-radius: var(--px-form-border-radius);
  }
}

/* Open state */
.vs--open .vs__dropdown-toggle {
  border-bottom-left-radius: var(--px-form-border-radius);
  border-bottom-right-radius: var(--px-form-border-radius);
  box-shadow: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
}

/* Disabled state */
.Px-select--disabled{
  pointer-events: none;

  .vs__dropdown-toggle {
    box-shadow: var(--px-form-shadow-disabled);
  }

  .vs__search,
  .vs__search:focus,
  .Px-select__label {
    color: var(--px-form-text-disabled);
  }
}

/* Readonly state */
.Px-select--readonly {
  .vs__dropdown-toggle {
    box-shadow: var(--px-form-shadow-disabled);
  }
  
  .vs__dropdown-menu {
    display: none !important;
  }

  .vs__open-indicator {
    transform: none;
  }
}

/* Required indicator */
.Px-select--required {
  .Px-select__label::after {
    content: '*';
    color: var(--px-form-required);
    margin-left: var(--px-form-required-margin);
  }
}
</style>
