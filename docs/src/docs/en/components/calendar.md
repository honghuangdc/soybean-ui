# Calendar

## Overview

Browse and select dates by month with support for single or multiple selection, disabled dates, range limits, custom cell rendering, and built-in month/year Select controls in the compact header.

## Usage

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

## Demos

```playground
basic
multiple
disabled
custom-styling
```

## API

<ComponentApi component="calendar" />
