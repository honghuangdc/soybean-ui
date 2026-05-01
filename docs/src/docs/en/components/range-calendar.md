# RangeCalendar

## Overview

RangeCalendar displays one or more month grids and lets users choose a start and end date directly from the calendar surface.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SRangeCalendar } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2026, 4, 18),
  end: new CalendarDate(2026, 4, 22)
});
</script>

<template>
  <SRangeCalendar v-model="value" :default-placeholder="value.start" />
</template>
```

## Demos

```playground
basic
two-months
disabled
custom-styling
```

## API

<ComponentApi component="range-calendar" />
