# DateRangeField

## 概览

DateRangeField 是一个分段日期范围输入组件，为选择开始日期和结束日期提供两组可编辑的日期段，同时为两个日期提交原生表单值。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SDateRangeField } from '@soybeanjs/ui';

const value = shallowRef({
  start: new CalendarDate(2026, 4, 19),
  end: new CalendarDate(2026, 4, 26)
});
</script>

<template>
  <SDateRangeField v-model="value" aria-label="日期范围" />
</template>
```

## 演示

```playground
basic
with-time
disabled
custom-styling
```

## API

<ComponentApi component="date-range-field" />
