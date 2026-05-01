<script setup lang="ts">
import { codeToHtml } from 'shiki';

interface Props {
  code: string;
}

const props = defineProps<Props>();

const wrapper = useTemplateRef('wrapper');

async function renderCode() {
  const html = await codeToHtml(props.code, {
    lang: 'ts',
    defaultColor: false,
    themes: {
      light: 'one-light',
      dark: 'one-dark-pro'
    }
  });

  if (wrapper.value) {
    wrapper.value.innerHTML = html;
  }
}

watch(
  () => props.code,
  () => {
    renderCode();
  },
  {
    immediate: true
  }
);

onMounted(() => {
  renderCode();
});
</script>

<template>
  <div class="border rounded-md overflow-hidden">
    <div
      ref="wrapper"
      class="px-3 py-2 text-xs leading-5 [&_pre]:my-0 [&_pre]:rounded-none [&_.shiki]:overflow-x-auto"
    />
  </div>
</template>
