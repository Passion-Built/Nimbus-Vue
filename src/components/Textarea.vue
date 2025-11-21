<template>
  <div
    :class="[
      'Px-textarea',
      {'Px-textarea--required': isRequired},
      {'Px-textarea--invalid': isInvalid},
      {'Px-textarea--disabled': disabled}

    ]"
  >
    <div class="Px-textarea__label-wrapper">
      <label class="Px-textarea__label" :for="id || generateAttribute('id')">{{ label }}</label>
    </div>
    <div class="Px-textarea__container">
       <textarea
        class="Px-textarea__textarea"
        :id="id || generateAttribute('id')"
        v-model="textareaValue"
        :required="isRequired"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readOnly"
        :aria-invalid="isInvalid"
        v-bind="$attrs"
       />
     </div>
    <div class="Px-textarea__message-wrapper">
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

const textareaValue = computed({
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
  --px-textarea-primary-bg: #eeeeee;
  --px-textarea-shadow: inset 3px 3px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-textarea-shadow-readonly: inset 2px 2px 3px #e0e0e0, inset -3px -3px 3px #f8f8f8;
  --px-textarea-shadow-disabled: inset 2px 2px 3px #e0e0e0, inset -2px -2px 3px #f8f8f8;
  --px-textarea-shadow-hover: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-textarea-shadow-active: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-textarea-text: #1B1B1B;
  --px-textarea-text-disabled: #A0A0A0;
  --px-textarea-text-placeholder: #6e6e6e;
  --px-textarea-text-placeholder-hover: #4d4d4d;
  --px-textarea-required: #DD1133;
}

.Px-textarea {
  outline: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--px-space-100);
  font-family: var(--px-font-family-body);
  color: var(--px-textarea-text);

  .Px-textarea__textarea {
    background-color: var(--px-textarea-primary-bg);
    border: none;
    padding: var(--px-space-150);
    border-radius: var(--px-space-100);
    width: 100%;
    min-height: var(--px-space-800);
    font-size: var(--px-space-200);
    letter-spacing: 1px;
    box-sizing: border-box;
    box-shadow: var(--px-textarea-shadow);
    resize: vertical;

    &:hover:not(:disabled, :read-only) {
      box-shadow: var(--px-textarea-shadow-hover);
  
      &::placeholder {
        color: var(--px-textarea-text-placeholder-hover);
      }
    }
  
    &:active {
      box-shadow: var(--px-textarea-shadow-active);
    }
  
    &:focus {
      outline: none;
      box-shadow:
0 0 3px 2px rgba(0, 120, 255, 0.5),
      inset 2px 2px 2px rgba(0,0,0,0.15),
      inset -2px -2px 2px rgba(255,255,255,0.8);
    }

    &:disabled {
      box-shadow: var(--px-textarea-shadow-disabled);
      cursor: not-allowed;
  
      &::placeholder {
        color: var(--px-textarea-text-disabled);
      }
    }
  
    &:read-only {
      box-shadow: var(--px-textarea-shadow-readonly);

      &:focus {
        box-shadow:
          var(--px-textarea-shadow-readonly),
          0 0 3px 3px rgba(0, 120, 255, 0.5),
          inset 2px 2px 4px rgba(0,0,0,0.15),
          inset -2px -2px 4px rgba(255,255,255,0.8);
      }
      
      &::placeholder {
        color: var(--px-textarea-text-disabled);
      }
    }
  }

  .Px-textarea__textarea::placeholder {
    font-size: var(--px-font-size-body);
    letter-spacing: 1px;
    color: var(--px-textarea-text-placeholder);
  }

  .Px-textarea__label-wrapper,
  .Px-textarea__message-wrapper {
    padding: var(--px-space-0) var(--px-space-050);
  }

  .Px-textarea__label {
    font-size: var(--px-font-size-body-sm);
  }

  .Px-textarea__message-wrapper {
    font-size: var(--px-font-size-caption);
  }

  &.Px-textarea--invalid,
  &.Px-textarea--invalid:hover {
    .Px-textarea__textarea,
    .Px-textarea__textarea::placeholder {
      color: var(--px-textarea-required);
    }

    .Px-textarea__message-wrapper {
      color: var(--px-textarea-required);
    }
  }
}

.Px-textarea--required {
  .Px-textarea__label::after {
    content: '*';
    color: var(--px-textarea-required);
    margin-left: var(--px-space-050);
  }
}

.Px-textarea--disabled {  
  .Px-textarea__label {
    color: var(--px-textarea-text-disabled);
  }
}
</style>
