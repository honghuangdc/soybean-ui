# YearPicker

## Overview

YearPicker lets users choose a single year from a paged year grid while preserving the selected value as a `DateValue` anchored to the first day of that year.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SYearPicker } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 1, 1));
</script>

<template>
  <SYearPicker v-model="value" aria-label="Fiscal year" />
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

<ComponentApi component="year-picker" />
