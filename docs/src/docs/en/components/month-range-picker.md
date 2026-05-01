# MonthRangePicker

## Overview

MonthRangePicker lets users select a start and end month from a year-based popup while preserving values as `DateValue` objects anchored to the first day of each selected month.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SMonthRangePicker } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2026, 4, 1),
  end: new CalendarDate(2026, 6, 1)
});
</script>

<template>
  <SMonthRangePicker v-model="value" aria-label="Billing quarter" />
</template>
```

## Demo

```playground
basic
size
disabled
custom-styling
```

## API

<ComponentApi component="month-range-picker" />
