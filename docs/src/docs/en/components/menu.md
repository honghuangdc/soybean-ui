# Menu

## Overview

The Menu component family allows you to build complex nested menus, including dropdowns and context menus. It supports a data-driven approach using `SMenuOptions` for easy configuration of groups, submenus, checkboxes, and radio items.

## Components

- **SMenuOptions**: The main component for rendering a list of menu items from data.
- **SMenuOption**: A recursive component used internally by `SMenuOptions` (can be used standalone).
- **SMenuCheckboxOptions**: For rendering a group of checkbox items.
- **SMenuRadioOptions**: For rendering a group of radio items.

## Usage

### Data Driven Menu

```vue
<script setup lang="ts">
import { SMenuOptions } from '@soybeanjs/ui';
import type { MenuOptionData } from '@soybeanjs/ui';

const items: MenuOptionData[] = [
  { label: 'My Account', isGroupLabel: true },
  { label: 'Profile', value: 'profile', icon: 'lucide:user', shortcut: '⇧⌘P' },
  { label: 'Settings', value: 'settings', icon: 'lucide:settings', shortcut: '⌘S' },
  { separator: true },
  {
    label: 'Theme',
    value: 'theme',
    children: [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' }
    ]
  }
];

function handleSelect(item: MenuOptionData) {
  console.log('Selected:', item.value);
}
</script>

<template>
  <SMenuOptions :items="items" @select="handleSelect" />
</template>
```

## API

<ComponentApi component="menu" />
