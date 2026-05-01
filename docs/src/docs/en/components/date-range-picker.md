# DateRangePicker

A date range picker component that allows users to select a start and end date from a calendar popup.

## Usage

```vue
<script setup lang="ts">
import { shallowRef } from 'vue';
import { SDateRangePicker } from '@soybeanjs/ui';

const range = shallowRef();
</script>

<template>
  <SDateRangePicker v-model="range" />
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

<ComponentApi component="date-range-picker" />
