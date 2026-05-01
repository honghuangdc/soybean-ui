# TimeField

## Overview

TimeField is a segmented time input for hour, minute, optional second, and locale-aware day period editing while still submitting a native form value.

## Usage

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

## Demo

```playground
basic
seconds
disabled
custom-styling
```

## API

<ComponentApi component="time-field" />
