# TimeRangeField

## 概述

TimeRangeField 是一个分段式时间范围输入组件，提供独立的开始和结束时间编辑分段，同时保留两侧原生表单提交值。

## 用法

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date';
import { shallowRef } from 'vue';
import { STimeRangeField } from '@soybeanjs/ui';

const value = shallowRef({
  start: new Time(9, 0, 0),
  end: new Time(17, 30, 0)
});
</script>

<template>
  <STimeRangeField v-model="value" aria-label="Working hours" />
</template>
```

## 演示

```playground
basic
seconds
disabled
custom-styling
```

## API

<ComponentApi component="time-range-field" />
