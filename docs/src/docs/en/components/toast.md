# Toast

## Overview

`SToastProvider` renders the toast viewports and `toast` is the imperative API used to create, update, dismiss, and inspect notifications.

The first argument of `toast(...)` becomes the toast title/message. Use `description`, `action`, `cancel`, `icon`, `ui`, and `position` to customize each notification.

## Usage

Mount one `SToastProvider` near your app root. If your app is already wrapped with `SConfigProvider`, a default `SToastProvider` is rendered automatically unless `customToast` is set to `true`.

```vue
<script setup lang="ts">
import { SButton, SToastProvider, toast } from '@soybeanjs/ui';

function openToast() {
  toast.success('Project published', {
    description: 'The package has been pushed to the registry.',
    richColor: true
  });
}
</script>

<template>
  <SToastProvider />

  <SButton @click="openToast">Show Toast</SButton>
</template>
```

## Demos

```playground
base
types
promise
action
control
appearance
stack
position
```

## API

<ComponentApi component="toast" />
