<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { SDateField } from '@soybeanjs/ui';

const value = new CalendarDate(2026, 4, 19);
</script>

<template>
  <div class="flex-c gap-3">
    <h3 class="playground-title">Disabled</h3>
    <SDateField :model-value="value" disabled aria-label="Disabled date" />
  </div>
</template>
