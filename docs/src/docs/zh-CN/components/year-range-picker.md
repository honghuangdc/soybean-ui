# YearRangePicker

## 概述

YearRangePicker 用于在分页年份网格中选择开始和结束年份，并将结果保留为分别锚定到各自年份第一天的 `DateValue`。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SYearRangePicker } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2024, 1, 1),
  end: new CalendarDate(2026, 1, 1)
});
</script>

<template>
  <SYearRangePicker v-model="value" aria-label="Project year range" />
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

<ComponentApi component="year-range-picker" />
