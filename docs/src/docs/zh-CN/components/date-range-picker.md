# DateRangePicker 日期范围选择器

日期范围选择器组件允许用户从日历弹出窗口中选择开始和结束日期。

## 用法

```vue
<script setup lang="ts">
import { shallowRef } from 'vue';
import { SDateRangePicker } from '@soybeanjs/ui';

const range = shallowRef();
</script>

<template>
  <SDateRangePicker v-model="range" />
</template>
```

## 示例

```playground
basic
disabled
size
custom-styling
```

## API

<ComponentApi component="date-range-picker" />
