# 日历

## 概述

用于按月浏览和选择日期，支持单选、多选、禁用日期、范围限制、自定义头部与日期单元格渲染，以及 Compact 头部内置的月份 / 年份 Select 切换。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SCalendar } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 4, 18));
</script>

<template>
  <SCalendar v-model="value" :default-placeholder="value" />
</template>
```

## 演示

```playground
basic
multiple
disabled
custom-styling
```

## API

<ComponentApi component="calendar" />
