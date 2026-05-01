# TimeField

## 概述

TimeField 是一个分段式时间输入组件，支持编辑小时、分钟、可选秒数与本地化上午/下午，同时保留原生表单提交值。

## 用法

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date';
import { shallowRef } from 'vue';
import { STimeField } from '@soybeanjs/ui';

const value = shallowRef(new Time(9, 30, 0));
</script>

<template>
  <STimeField v-model="value" aria-label="Meeting time" />
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

<ComponentApi component="time-field" />
