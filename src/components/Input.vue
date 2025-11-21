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
:root {
  --px-input-primary-bg: #eeeeee;
  --px-input-shadow: inset 3px 3px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-input-shadow-readonly: inset 2px 2px 3px #e0e0e0, inset -3px -3px 3px #f8f8f8;
  --px-input-shadow-hover: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-input-shadow-active: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-input-shadow-disabled: inset 2px 2px 3px #e0e0e0, inset -2px -2px 3px #f8f8f8;
  --px-input-text: #1B1B1B;
  --px-input-text-disabled: #A0A0A0;
  --px-input-text-placeholder: #6e6e6e;
  --px-input-text-placeholder-hover: #4d4d4d;
  --px-input-required: #DD1133;
}

.Px-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--px-space-100);
  font-family: var(--px-font-family-body);
  color: var(--px-input-text);

  .Px-input__input {
    background-color: var(--px-input-primary-bg);
    border: none;
    padding: var(--px-space-150);
    border-radius: var(--px-space-100);
    width: 100%;
    font-size: var(--px-space-200);
    letter-spacing: 1px;
    box-sizing: border-box;
    box-shadow: var(--px-input-shadow);

    &:hover:not(:disabled, :read-only) {
      box-shadow: var(--px-input-shadow-hover);

      &::placeholder {
        color: var(--px-input-text-placeholder-hover);
      }
    }

    &:active {
      box-shadow: var(--px-input-shadow-active);
    }

    &:focus:not(:disabled) {
      outline: none;
      box-shadow:
        0 0 3px 3px rgba(0, 120, 255, 0.5),
        inset 2px 2px 4px rgba(0,0,0,0.15),
        inset -2px -2px 4px rgba(255,255,255,0.8);
    }

    &:disabled {
      box-shadow: var(--px-input-shadow-disabled);

      &::placeholder {
        color: var(--px-input-text-disabled);
      }
    }

    &:read-only {
      box-shadow: var(--px-input-shadow-readonly);

      &:focus {
        box-shadow:
          var(--px-input-shadow-readonly),
          0 0 3px 3px rgba(0, 120, 255, 0.5),
          inset 2px 2px 4px rgba(0,0,0,0.15),
      }
          
      &::placeholder {
        color: var(--px-input-text-disabled);
      }
    }
  }

  .Px-input__input::placeholder {
    font-size: var(--px-font-size-body);
    letter-spacing: 1px;
    color: var(--px-input-text-placeholder);
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
      color: var(--px-input-required);
    }

    .Px-input__message-wrapper {
      color: var(--px-input-required);
    }
  }
}

.Px-input--required {
  .Px-input__label::after {
    content: '*';
    color: var(--px-input-required);
    margin-left: var(--px-space-050);
  }
}

.Px-input--disabled {
  .Px-input__label {
    color: var(--px-input-text-disabled);
  }
}
</style>
