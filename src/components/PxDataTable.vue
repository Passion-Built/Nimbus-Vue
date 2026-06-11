<template>
  <div class="Px-table__container">
    <table class="Px-table">
      <thead>
        <tr class="Px-table__label-row">
          <th class="Px-table__column" v-for="col in columns" :key="col.key">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="Px-table__row" v-for="row in rows" :key="row.id">
          <td class="Px-table__cell" v-for="col in columns" :key="col.key">
            <component v-if="col.type" :is="col.type" v-bind="row[col.key]" />
            <span v-else>{{ row[col.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { type Component } from 'vue'

interface Column {
  key: string
  label: string
  type?: Component
}

interface Row {
  id: string | number
  [key: string]: unknown
}

defineProps<{
  columns: Column[]
  rows: Row[]
}>()
</script>

<style scoped>
.Px-table__container {
  overflow-x: auto;
  width: 100%;
  padding: var(--px-space-100);
  box-sizing: border-box;
}

.Px-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 var(--px-table-border-spacing);
  font-family: var(--px-font-family-body);
}

.Px-table__label-row {
  transform: scale(0.98);
}

.Px-table__column {
  padding: var(--px-table-column-padding);
  text-align: left;
  font-weight: normal;
  text-transform: uppercase;
  font-family: var(--px-font-family-headings);
  font-size: var(--px-font-size-body-sm);
  color: var(--px-table-column-color);
}

.Px-table__row {
  transform: scale(0.98);
  box-shadow: var(--px-table-row-shadow);
  border-radius: var(--px-table-row-border-radius);
  transition: all 0.2s ease-in-out;

  .Px-table__cell:first-child {
    border-top-left-radius: var(--px-table-row-border-radius);
    border-bottom-left-radius: var(--px-table-row-border-radius);
  }

  .Px-table__cell:last-child {
    border-top-right-radius: var(--px-table-row-border-radius);
    border-bottom-right-radius: var(--px-table-row-border-radius);
  }

  &:hover {
    transform: scale(0.99);
    box-shadow: var(--px-table-row-shadow-hover);
  }
}

.Px-table__cell {
  padding: var(--px-table-cell-padding);
  background-color: var(--px-table-cell-bg);
  color: var(--px-color-text);
  font-size: var(--px-font-size-body);
}
</style>
