# TimeRangeField

## Overview

TimeRangeField is a segmented time range input with independent editable start and end time segments while still submitting native form values for both sides.

## Usage

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date';
import { shallowRef } from 'vue';
import { STimeRangeField } from '@soybeanjs/ui';

const value = shallowRef({
  start: new Time(9, 0, 0),
  end: new Time(17, 30, 0)
});
</script>

<template>
  <STimeRangeField v-model="value" aria-label="Working hours" />
</template>
```

## Demo

```playground
basic
seconds
disabled
custom-styling
```

## API

<ComponentApi component="time-range-field" />
