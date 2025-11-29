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

<style lang="scss">
.Px-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--px-space-100);
  font-family: var(--px-font-family-body);
  color: var(--px-form-text);

  .Px-input__input {
    background-color: var(--px-form-primary-bg);
    border: none;
    padding: var(--px-space-150);
    border-radius: var(--px-space-100);
    width: 100%;
    font-size: var(--px-space-200);
    letter-spacing: 1px;
    box-sizing: border-box;
    box-shadow: var(--px-form-shadow);

    &:hover:not(:disabled, :read-only) {
      box-shadow: var(--px-form-shadow-hover);

      &::placeholder {
        color: var(--px-form-text-placeholder-hover);
      }
    }

    &:active {
      box-shadow: var(--px-form-shadow-active);
    }

    &:focus:not(:disabled) {
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
        box-shadow:
          var(--px-form-shadow-readonly),
          0 0 3px 3px rgba(0, 120, 255, 0.5),
          inset 2px 2px 4px rgba(0,0,0,0.15),
      }
          
      &::placeholder {
        color: var(--px-form-text-disabled);
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
    padding: var(--px-space-0) var(--px-space-050);
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
    margin-left: var(--px-space-050);
  }
}

.Px-input--disabled {
  .Px-input__label {
    color: var(--px-form-text-disabled);
  }
}
</style>
