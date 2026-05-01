# 菜单

## 概述

Menu 组件家族可用于构建复杂的嵌套菜单（包含下拉菜单与右键菜单）。它支持数据驱动方式：通过 `SMenuOptions` 轻松配置分组、子菜单、复选项与单选项等。

## 组件

- **SMenuOptions**: The main component for rendering a list of menu items from data.
- **SMenuOption**: A recursive component used internally by `SMenuOptions` (can be used standalone).
- **SMenuCheckboxOptions**: For rendering a group of checkbox items.
- **SMenuRadioOptions**: For rendering a group of radio items.

## 用法

### 数据驱动菜单

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
