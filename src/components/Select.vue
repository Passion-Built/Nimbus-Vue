<template>
  <v-select
    class="Px-select"
    v-model="selectedValue"
    :options="options"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
  >
  </v-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

interface Option {
  label: string
  value: string | number
}

const props = defineProps<{
  modelValue?: string | number
  options: Array<string | Option>
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue ?? null)

watch(selectedValue, (val) => emit('update:modelValue', val))
watch(() => props.modelValue, (val) => {
  selectedValue.value = val ?? null
})
</script>

<style scoped>
.Px-select {
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
}

.Px-select__option {
  padding: 0.5rem;
}
</style>
