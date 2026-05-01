# MonthRangePicker

## 概述

MonthRangePicker 用于在按年份切换的弹层中选择开始和结束月份，并将结果保留为锚定到各自月份第一天的 `DateValue`。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SMonthRangePicker } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2026, 4, 1),
  end: new CalendarDate(2026, 6, 1)
});
</script>

<template>
  <SMonthRangePicker v-model="value" aria-label="Billing quarter" />
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

<ComponentApi component="month-range-picker" />
