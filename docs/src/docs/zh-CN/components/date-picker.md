# DatePicker 日期选择器

日期选择器组件，结合文本输入和日历弹出框来选择日期。

## 用法

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { SDatePicker } from '@soybeanjs/ui';

const date = ref<DateValue>();
</script>

<template>
  <SDatePicker v-model="date" :default-placeholder="new CalendarDate(2024, 1, 1)" />
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

<ComponentApi component="date-picker" />
