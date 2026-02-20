<template>
  <div
    :class="[
      'Px-input',
      {'Px-input--required': isRequired && !disabled && !readOnly},
      {'Px-input--invalid': isInvalid},
      {'Px-input--disabled': disabled}
    ]"
  >
    <div class="Px-input__label-wrapper">
      <label class="Px-input__label" :for="id || generateAttribute('id')">{{ label }}</label>
    </div>
    <div class="Px-input__container">
       <input
        class="Px-input__input"
        :id="id || generateAttribute('id')"
        v-model="inputValue"
        :required="isRequired && !disabled && !readOnly"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readOnly"
        :aria-invalid="isInvalid"
        v-bind="$attrs"
       />
     </div>
    <div class="Px-input__message-wrapper">
      <div v-if="isInvalid && errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  id?: string
  disabled?: boolean
  errorMessage?: string
  isRequired?: boolean
  isInvalid?: boolean
  label?: string
  modelValue?: string | number
  placeholder?: string
  readOnly?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number):void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (val: string | number) => emit('update:modelValue', val),
})

const generateAttribute = (attribute: string): string | undefined => {
  if (!props.id && !props.label) return
  const id = props.id || props.label
  return `${id}-${attribute}`
}
</script>

<style scoped>
.Px-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--px-form-gap);
  font-family: var(--px-font-family-body);
  color: var(--px-form-text);

  .Px-input__input {
    background-color: var(--px-form-primary-bg);
    border: none;
    padding: var(--px-form-padding);
    border-radius: var(--px-form-border-radius);
    width: 100%;
    font-size: var(--px-font-size-body);
    letter-spacing: 1px;
    box-sizing: border-box;
    box-shadow: var(--px-form-shadow);
    color: var(--px-form-text);
    

    &:hover:not(:disabled) {
      box-shadow: var(--px-form-shadow-hover);

      &::placeholder {
        color: var(--px-form-text-placeholder-hover);
      }
    }

    &:focus {
      outline: none;
      box-shadow: var(--px-form-shadow-focus);
    }

    &:disabled {
      box-shadow: var(--px-form-shadow-disabled);
      cursor: not-allowed;

      &::placeholder {
        color: var(--px-form-text-disabled);
      }
    }

    &:read-only {
      box-shadow: var(--px-form-shadow-readonly);

      &:focus {
        outline: none;
        box-shadow: var(--px-form-shadow-focus);
      }
          
      &::placeholder {
        color: var(--px-form-text-disabled) !important;
      }
    }
  }

  .Px-input__input::placeholder {
    font-size: var(--px-font-size-body);
    letter-spacing: 1px;
    color: var(--px-form-text-placeholder);
  }

  .Px-input__label-wrapper,
  .Px-input__message-wrapper {
    padding: var(--px-form-wrapper-padding);
  }

  .Px-input__label {
    font-size: var(--px-font-size-body-sm);
  }

  .Px-input__message-wrapper {
    font-size: var(--px-font-size-caption);
  }

  &.Px-input--invalid,
  &.Px-input--invalid:hover {
    .Px-input__input,
    .Px-input__input::placeholder {
      color: var(--px-form-required);
    }

    .Px-input__message-wrapper {
      color: var(--px-form-required);
    }
  }
}

.Px-input--required {
  .Px-input__label::after {
    content: '*';
    color: var(--px-form-required);
    margin-left: var(--px-form-required-margin);
  }
}

.Px-input--disabled {
  .Px-input__label {
    color: var(--px-form-text-disabled);
  }
}
</style>
