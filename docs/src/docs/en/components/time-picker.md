# TimePicker

## Overview

TimePicker lets users choose a single time from a popup list while preserving the selected value as a `TimeValue`.

## Usage

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date';
import { shallowRef } from 'vue';
import { STimePicker } from '@soybeanjs/ui';

const value = shallowRef(new Time(9, 30, 0));
</script>

<template>
  <STimePicker v-model="value" aria-label="Meeting time" />
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

<ComponentApi component="time-picker" />
