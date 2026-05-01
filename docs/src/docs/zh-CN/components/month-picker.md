# MonthPicker

## 概述

MonthPicker 用于在按年份切换的弹层中选择月份，并将结果保留为锚定到该月第一天的 `DateValue`。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SMonthPicker } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 4, 1));
</script>

<template>
  <SMonthPicker v-model="value" aria-label="Billing month" />
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

<ComponentApi component="month-picker" />
