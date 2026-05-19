<template>
  <label
    :class="[
      'Px-radio',
      { 'Px-radio--required': isRequired },
      { 'Px-radio--disabled': disabled },
    ]"
  >
    <input
      class="Px-radio__input"
      type="radio"
      v-model="radioValue"
      :value="value"
      :name="name"
      :id="id || generateAttribute('id')"
      :disabled="disabled"
      :required="isRequired"
      :aria-invalid="isInvalid"
    />
    <span class="Px-radio__radio"></span>
    <span class="Px-radio__label"><slot /></span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
  id?: string
  isInvalid?: boolean
  isRequired?: boolean
  modelValue?: string | number
  name?: string
  value?: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const radioValue = computed({
  get: () => props.modelValue,
  set: (val: string | number) => emit('update:modelValue', val),
})

const generateAttribute = (attribute: string): string | undefined => {
  if (!props.name) return
  return `${props.name}-${attribute}`
}
</script>

<style scoped>
.Px-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--px-radio-gap);
  cursor: pointer;
  font-family: var(--px-font-family-body);
  color: var(--px-color-text);
}

.Px-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Px-radio__radio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--px-radio-size);
  height: var(--px-radio-size);
  border-radius: 50%;
  background-color: var(--px-radio-bg);
  box-shadow: var(--px-radio-shadow);
  position: relative;
  transition: all 0.2s ease-in-out;
}

.Px-radio__label {
  font-size: var(--px-font-size-body);
}

/* Checked state */
.Px-radio__input:checked + .Px-radio__radio {
  background-color: var(--px-radio-bg-checked);
  box-shadow: none;
}

.Px-radio__input:checked + .Px-radio__radio::after {
  content: '';
  display: block;
  width: var(--px-radio-dot-size);
  height: var(--px-radio-dot-size);
  border-radius: 50%;
  background-color: var(--px-radio-dot-color);
}

/* Focus */
.Px-radio__input:focus-visible + .Px-radio__radio {
  outline: 2px solid var(--px-focus-outline);
  outline-offset: 3px;
}

/* Required */
.Px-radio--required .Px-radio__label::after {
  content: '*';
  color: var(--px-radio-required-color);
  margin-left: var(--px-form-required-margin);
}

/* Disabled */
.Px-radio--disabled {
  cursor: not-allowed;

  .Px-radio__label {
    color: var(--px-color-text-disabled);
  }

  .Px-radio__radio {
    box-shadow: var(--px-form-shadow-disabled);
  }
}
</style>
