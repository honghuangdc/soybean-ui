# DateField

## Overview

DateField is a segmented date input that keeps keyboard-editable parts for day, month, year, and optional time values while still submitting a native form value.

## Usage

```vue
<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
import { shallowRef } from 'vue';
import { SDateField } from '@soybeanjs/ui';

const value = shallowRef(new CalendarDate(2026, 4, 19));
</script>

<template>
  <SDateField v-model="value" aria-label="Event date" />
</template>
```

## Demo

```playground
basic
with-time
disabled
custom-styling
```

## API

<ComponentApi component="date-field" />
