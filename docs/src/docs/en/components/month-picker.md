# MonthPicker

## Overview

MonthPicker lets users pick a month from a year-based popup while keeping the selected value as a `DateValue` anchored to the first day of that month.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SMonthPicker } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 4, 1));
</script>

<template>
  <SMonthPicker v-model="value" aria-label="Billing month" />
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

<ComponentApi component="month-picker" />
