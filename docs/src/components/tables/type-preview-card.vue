<script setup lang="ts">
import { SLink } from '@soybeanjs/ui';
import type { GeneratedApiTypePreview } from './generated-api';
import CallableTypeTable from './callable-type-table.vue';
import TypePreviewCode from './type-preview-code.vue';
import TypeData from './type-data.vue';

interface Props {
  href?: string | null;
  preview: GeneratedApiTypePreview;
}

defineProps<Props>();
</script>

<template>
  <div class="min-w-80 w-fit max-w-[calc(100vw-2rem)] max-h-96 overflow-auto p-1 space-y-3">
    <p v-if="preview.description" class="text-xs leading-5 text-muted-foreground">
      {{ preview.description }}
    </p>

    <TypeData
      v-if="preview.kind === 'table'"
      :name="preview.name"
      :display-name="preview.displayName"
      :description="preview.description"
      :fields="preview.fields"
      hide-header
    />

    <CallableTypeTable
      v-else-if="preview.kind === 'callable'"
      :name="preview.name"
      :display-name="preview.displayName"
      :description="preview.description"
      :preset="preview.preset"
      :rows="preview.rows"
      hide-header
    />

    <TypePreviewCode v-else :code="preview.code || `type ${preview.displayName || preview.name} = ${preview.type}`" />

    <div v-if="href" class="border-t pt-2">
      <SLink :href="href" target="_self" class="text-xs text-primary hover:underline underline-offset-4">
        Open full type
      </SLink>
    </div>
  </div>
</template>
