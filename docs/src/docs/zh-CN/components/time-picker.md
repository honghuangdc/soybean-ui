# TimePicker

## 概述

TimePicker 用于在弹层时间列表中选择单个时间，并将结果保留为 `TimeValue`。

## 用法

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

## 演示

```playground
basic
size
disabled
custom-styling
```

## API

<ComponentApi component="time-picker" />
