# RangeCalendar

## 概述

RangeCalendar 会渲染一个或多个按月排列的日期网格，用于直接选择起始日期和结束日期。

## 用法

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

## 演示

```playground
basic
two-months
disabled
custom-styling
```

## API

<ComponentApi component="range-calendar" />
