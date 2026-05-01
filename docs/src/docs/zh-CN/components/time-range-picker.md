# TimeRangePicker

## 概述

TimeRangePicker 用于在弹层时间列表中选择开始和结束时间，并将结果保留为 `TimeValue` 结构。

## 用法

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

## 演示

```playground
basic
size
disabled
custom-styling
```

## API

<ComponentApi component="time-range-picker" />
