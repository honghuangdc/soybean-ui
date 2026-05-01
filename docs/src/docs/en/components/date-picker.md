# DatePicker

A date picker component that combines a text input with a calendar popup for selecting dates.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { SDatePicker } from '@soybeanjs/ui';

const date = ref<DateValue>();
</script>

<template>
  <SDatePicker v-model="date" :default-placeholder="new CalendarDate(2024, 1, 1)" />
</template>
```

## Examples

```playground
basic
disabled
size
custom-styling
```

## API

<ComponentApi component="date-picker" />
