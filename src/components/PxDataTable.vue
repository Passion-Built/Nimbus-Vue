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
  padding: var(--px-table-padding, unset);
  border: var(--px-table-border, none);
  border-radius: var(--px-border-radius);
  box-sizing: border-box;
}

.Px-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: var(--px-table-border-spacing, unset);
  font-family: var(--px-font-family-body);
}

.Px-table__label-row {
  transform: var(--px-table-row-transform, none);
}

.Px-table__column {
  background-color: var(--px-table-column-bg);
  padding: var(--px-table-column-padding);
  border-bottom: var(--px-table-row-border, none);
  text-align: left;
  font-weight: var(--px-table-column-font-weight, normal);
  text-transform: var(--px-table-column-text-transform, uppercase);
  font-family: var(--px-font-family-headings);
  font-size: var(--px-table-column-font-size);
  color: var(--px-table-column-color);
}

.Px-table__row {
  transform: var(--px-table-row-transform, none);
  box-shadow: var(--px-table-row-shadow, none);
  border-radius: var(--px-table-row-border-radius);
  transition:
    box-shadow var(--px-duration-state) var(--px-ease),
    transform var(--px-duration-state) var(--px-ease);

  .Px-table__cell:first-child {
    border-top-left-radius: var(--px-table-row-border-radius);
    border-bottom-left-radius: var(--px-table-row-border-radius);
  }

  .Px-table__cell:last-child {
    border-top-right-radius: var(--px-table-row-border-radius);
    border-bottom-right-radius: var(--px-table-row-border-radius);
  }
}

.Px-table__cell {
  padding: var(--px-table-cell-padding);
  background-color: var(--px-table-cell-bg);
  border-bottom: var(--px-table-row-border, none);
  color: var(--px-color-text);
  font-size: var(--px-font-size-body);
}

.Px-table__row:last-child .Px-table__cell {
  border-bottom: none;
}
</style>
