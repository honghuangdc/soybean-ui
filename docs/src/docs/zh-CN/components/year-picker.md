# YearPicker

## 概述

YearPicker 用于在分页年份网格中选择单个年份，并将结果保留为锚定到该年份第一天的 `DateValue`。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SYearPicker } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 1, 1));
</script>

<template>
  <SYearPicker v-model="value" aria-label="Fiscal year" />
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

<ComponentApi component="year-picker" />
