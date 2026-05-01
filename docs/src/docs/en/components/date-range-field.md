# DateRangeField

## Overview

DateRangeField is a segmented date range input that provides two sets of editable date segments for selecting a start and end date, while submitting native form values for both dates.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SDateRangeField } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2026, 4, 19),
  end: new CalendarDate(2026, 4, 26)
});
</script>

<template>
  <SDateRangeField v-model="value" aria-label="Date range" />
</template>
```

## Demo

```playground
basic
with-time
disabled
custom-styling
```

## API

<ComponentApi component="date-range-field" />
