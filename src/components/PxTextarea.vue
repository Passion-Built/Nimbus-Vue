<template>
  <div
    :class="[
      'Px-textarea',
      {'Px-textarea--required': isRequired && !disabled && !readOnly},
      {'Px-textarea--invalid': isInvalid},
      {'Px-textarea--disabled': disabled}

    ]"
  >
    <div class="Px-textarea__label-wrapper" v-if="label">
      <label class="Px-textarea__label" :for="id || generateAttribute('id')">{{ label }}</label>
    </div>
    <div class="Px-textarea__container">
       <textarea
        class="Px-textarea__textarea"
        :id="id || generateAttribute('id')"
        v-model="textareaValue"
        ref="textareaEl"
        :required="isRequired && !disabled && !readOnly"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readOnly"
        :aria-invalid="isInvalid"
        :aria-describedby="generateAttribute('message')"
        :style="textareaStyles"
        v-bind="$attrs"
       />
     </div>
    <div class="Px-textarea__message-wrapper" :id="generateAttribute('message')">
      <div v-if="helperMessage">{{ helperMessage }}</div>
      <div v-else-if="isInvalid && errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  id?: string
  disabled?: boolean
  errorMessage?: string
  helperMessage?: string
  isRequired?: boolean
  isInvalid?: boolean
  label?: string
  modelValue?: string | number
  placeholder?: string
  readOnly?: boolean
  resize?: 'horizontal' | 'vertical' | 'both' | 'auto'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number):void
}>()

const textareaValue = computed({
  get: () => props.modelValue,
  set: (val: string | number) => emit('update:modelValue', val),
})

const textareaEl = ref<HTMLTextAreaElement | null>(null)

const textareaStyles = computed(() => {
  const styles: Record<string, string> = {}
  styles.resize = props.resize === 'auto' ? 'none' : (props.resize ?? 'vertical')
  if (props.resize === 'auto') styles.overflow = 'hidden'
  return styles
})

watch(textareaValue, () => {
  if (props.resize === 'auto' && textareaEl.value) {
    textareaEl.value.style.height = 'auto'
    textareaEl.value.style.height = `${textareaEl.value.scrollHeight}px`
  }
})

const generateAttribute = (attribute: string): string | undefined => {
  if (!props.id && !props.label) return
  const id = props.id || props.label
  return `${id}-${attribute}`
}
</script>

<style scoped>
.Px-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--px-form-gap);
  font-family: var(--px-font-family-body);
  color: var(--px-form-text);

  .Px-textarea__textarea {
    background-color: var(--px-form-primary-bg);
    border: var(--px-form-border, none);
    padding: var(--px-form-padding);
    border-radius: var(--px-form-border-radius);
    width: 100%;
    min-height: var(--px-form-min-height);
    font-family: inherit;
    font-size: var(--px-font-size-body);
    letter-spacing: 1px;
    box-sizing: border-box;
    box-shadow: var(--px-form-shadow);
    color: var(--px-form-text);
    transition:
      box-shadow var(--px-duration-state) var(--px-ease),
      transform var(--px-duration-state) var(--px-ease);

    &:hover:not(:disabled) {
      box-shadow: var(--px-form-shadow-hover, none);
      transform: var(--px-form-transform-hover, none);

      &::placeholder {
        color: var(--px-form-text-placeholder-hover);
      }
    }

    &:focus {
      outline: var(--px-focus-ring, none);
      outline-offset: var(--px-focus-offset, unset);
      box-shadow: var(--px-form-shadow-focus, none);
      transform: var(--px-form-transform-focus, none);
    }

    &:disabled {
      border: var(--px-form-border-disabled, none);
      box-shadow: var(--px-form-shadow-disabled);
      cursor: not-allowed;

      &::placeholder {
        color: var(--px-form-text-disabled);
      }
    }

    &:read-only:not(:disabled) {
      border: var(--px-form-border-readonly, none);
      box-shadow: var(--px-form-shadow-readonly);

      &:focus {
        outline: none;
        box-shadow: var(--px-form-shadow-focus, none);
        transform: none;
      }

      &::placeholder {
        color: var(--px-form-text-disabled) !important;
      }
    }
  }

  .Px-textarea__textarea::placeholder {
    font-size: var(--px-font-size-body);
    letter-spacing: 1px;
    color: var(--px-form-text-placeholder);
  }

  .Px-textarea__label-wrapper,
  .Px-textarea__message-wrapper {
    padding: var(--px-form-wrapper-padding);
  }

  .Px-textarea__label {
    font-size: var(--px-font-size-body-sm);
  }

  .Px-textarea__message-wrapper {
    font-size: var(--px-font-size-caption);
  }

  &.Px-textarea--invalid,
  &.Px-textarea--invalid:hover {
    .Px-textarea__textarea {
      border-color: var(--px-form-required);
    }

    .Px-textarea__textarea,
    .Px-textarea__textarea::placeholder {
      color: var(--px-form-required);
    }

    .Px-textarea__message-wrapper {
      color: var(--px-form-required);
    }
  }
}

.Px-textarea--required {
  .Px-textarea__label::after {
    content: '*';
    color: var(--px-form-required);
    margin-left: var(--px-form-required-margin);
  }
}

.Px-textarea--disabled {  
  .Px-textarea__label {
    color: var(--px-form-text-disabled);
  }
}
</style>
