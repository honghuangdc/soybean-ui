# TimeRangePicker

## Overview

TimeRangePicker lets users select a start and end time from a popup list while preserving the selected values as `TimeValue` objects.

## Usage

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date';
import { shallowRef } from 'vue';
import { STimeRangePicker } from '@soybeanjs/ui';

const value = shallowRef({
  start: new Time(9, 0, 0),
  end: new Time(17, 30, 0)
});
</script>

<template>
  <STimeRangePicker v-model="value" aria-label="Working hours" />
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

<ComponentApi component="time-range-picker" />
