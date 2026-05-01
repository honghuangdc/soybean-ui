# YearRangePicker

## Overview

YearRangePicker lets users select a start and end year from a paged year grid while preserving the selected values as `DateValue` objects anchored to the first day of each year.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SYearRangePicker } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2024, 1, 1),
  end: new CalendarDate(2026, 1, 1)
});
</script>

<template>
  <SYearRangePicker v-model="value" aria-label="Project year range" />
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

<ComponentApi component="year-range-picker" />
