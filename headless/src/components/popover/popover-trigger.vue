<script setup lang="ts">
import { computed } from 'vue';
import { useForwardElement } from '../../composables';
import { Primitive } from '../primitive';
import { PopperAnchor } from '../popper';
import { usePopoverRootContext, usePopoverUi } from './context';
import type { PopoverTriggerProps } from './types';

defineOptions({
  name: 'PopoverTrigger'
});

const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  as: 'button'
});

const cls = usePopoverUi('trigger');

const { open, onOpenToggle, dataState, popupId, disabled, initTriggerId, onTriggerElementChange, hasCustomAnchor } =
  usePopoverRootContext('PopoverTrigger');

const [_, setTriggerElement] = useForwardElement(onTriggerElementChange);

const tag = computed(() => (props.as === 'button' ? 'button' : undefined));

const onClick = (event: MouseEvent) => {
  if (disabled.value) {
    event.preventDefault();
    return;
  }

  onOpenToggle();
};

initTriggerId();
</script>

<template>
  <component
    :is="hasCustomAnchor ? Primitive : PopperAnchor"
    :ref="setTriggerElement"
    :class="cls"
    :as="as"
    :as-child="asChild"
    :type="tag"
    aria-haspopup="dialog"
    :aria-disabled="disabled || undefined"
    :aria-expanded="open || false"
    :aria-controls="open ? popupId : undefined"
    :data-state="dataState"
    :data-disabled="disabled ? '' : undefined"
    @click="onClick"
  >
    <slot />
  </component>
</template>
