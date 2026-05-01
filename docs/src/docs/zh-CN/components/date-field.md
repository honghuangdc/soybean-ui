# DateField

## 概述

DateField 是一个分段式日期输入组件。它将日、月、年以及可选的时间段拆成可键盘编辑的片段，同时仍然保留可提交到表单中的原生输入值。

## 用法

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SDateField } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 4, 19));
</script>

<template>
  <SDateField v-model="value" aria-label="事件日期" />
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

<ComponentApi component="date-field" />
