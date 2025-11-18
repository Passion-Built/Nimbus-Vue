<template>
  <div
    :class="[
      'Px-textarea',
      {'Px-textarea--required': isRequired},
      { 'Px-textarea--invalid': isInvalid }
    ]"
  >
    <div class="Px-textarea__label-wrapper">
      <label class="Px-textarea__label" :for="id || generateAttribute('id')">{{ label }}</label>
    </div>
    <div class="Px-textarea__container">
      <div
       :class="[
          'Px-textarea__icon',
          { 'Px-textarea__icon--left': iconLeft },
        ]"
      ></div>
       <textarea
        class="Px-textarea__textarea"
         :id="id || generateAttribute('id')"
         v-model="textareaValue"
         :required="isRequired"
         :disabled="disabled"
         :placeholder="placeholder"
         :readonly="readOnly"
         :aria-invalid="isInvalid"
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
  iconLeft?: string
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

<style lang="scss" scoped>
.Px-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  .Px-textarea__textarea {
    border: 1px solid var(--color-neutral-200);
    background-color: var(--color-neutral-200);
    padding: 12px 8px;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    letter-spacing: 1px;
    box-sizing: border-box;
  }

  .Px-textarea__textarea::placeholder {
    color: #6D7174;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .Px-textarea__textarea:focus-visible {
    outline: none;
  }

  .Px-textarea__label-wrapper,
  .Px-textarea__message-wrapper {
    padding: 0 8px;
  }

  .Px-textarea__label {
    font-size: 14px;
    color: #6D7174;
  }

  .Px-textarea__message-wrapper {
    font-size: 12px;
    color: #6D7174;
  }
}
.Px-textarea--required {
  .Px-textarea__label::after {
    content: '*';
    color: #DD1133;
    margin-left: 4px;
  }
}
</style>
