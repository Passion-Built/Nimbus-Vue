<template>
  <div
    :class="[
      'Px-input',
      {'Px-input--required': isRequired},
      { 'Px-input--invalid': isInvalid }
    ]"
  >
    <div class="Px-input__label-wrapper">
      <label class="Px-input__label" :for="id || generateAttribute('id')">{{ label }}</label>
    </div>
    <div class="Px-input__container">
      <div
       :class="[
          'Px-input__icon',
          { 'Px-input__icon--left': iconLeft },
        ]"
      ></div>
       <input
        class="Px-input__input"
         :id="id || generateAttribute('id')"
         v-model="inputValue"
         :required="isRequired"
         :disabled="disabled"
         :max="maxNumber"
         :min="minNumber"
         :placeholder="placeholder"
         :readonly="readOnly"
         :aria-invalid="isInvalid"
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
  iconLeft?: string
  isRequired?: boolean
  isInvalid?: boolean
  label?: string
  modelValue?: string | number
  maxNumber?: number
  minNumber?: number
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

<style lang="scss" scoped>
.Px-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  .Px-input__input {
    border: 1px solid var(--color-neutral-200);
    background-color: var(--color-neutral-200);
    padding: 12px 8px;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    letter-spacing: 1px;
    box-sizing: border-box;
  }

  .Px-input__input::placeholder {
    color: #6D7174;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .Px-input__input:focus-visible {
    outline: none;
  }

  .Px-input__label-wrapper,
  .Px-input__message-wrapper {
    padding: 0 8px;
  }

  .Px-input__label {
    font-size: 14px;
    color: #6D7174;
  }

  .Px-input__message-wrapper {
    font-size: 12px;
    color: #6D7174;
  }
}
.Px-input--required {
  .Px-input__label::after {
    content: '*';
    color: #DD1133;
    margin-left: 4px;
  }
}
</style>
