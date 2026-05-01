<script setup lang="ts">
import { toTypeAnchorId, typeToVNode } from './type-anchor';
import type { GeneratedApiCallableType } from './generated-api';

interface Props {
  name: string;
  displayName?: string;
  description?: string;
  preset: GeneratedApiCallableType['preset'];
  rows: GeneratedApiCallableType['rows'];
  hideHeader?: boolean;
}

const props = defineProps<Props>();

const anchorId = toTypeAnchorId(props.name);
</script>

<template>
  <div>
    <h4 v-if="!hideHeader" :id="anchorId" class="text-lg font-semibold my-3 scroll-mt-24">
      <component :is="typeToVNode(displayName || name)" />
    </h4>
    <p v-if="description && !hideHeader" class="text-sm text-muted-foreground">
      {{ description }}
    </p>
    <div class="pt-3 pb-5">
      <DataTable :preset="preset" :data="rows" />
    </div>
  </div>
</template>
