<script setup lang="ts">
import { computed } from 'vue';
import { useForwardListeners, useOmitProps } from '../../composables';
import Icon from '../_icon/icon.vue';
import PopoverTrigger from '../popover/popover-trigger.vue';
import DatePickerContent from './date-picker-content.vue';
import DatePickerRoot from './date-picker-root.vue';
import type { DatePickerCompactEmits, DatePickerCompactProps, DatePickerCompactSlots } from './types';

defineOptions({
  name: 'DatePickerCompact'
});

const props = withDefaults(defineProps<DatePickerCompactProps>(), {
  open: undefined,
  triggerPlaceholder: 'Pick a date'
});

const emit = defineEmits<DatePickerCompactEmits>();

defineSlots<DatePickerCompactSlots>();

const listeners = useForwardListeners(emit);

const forwardedProps = useOmitProps(props, [
  'triggerPlaceholder',
  'triggerProps',
  'popupProps',
  'portalProps',
  'positionerProps'
]);

const mergedPositionerProps = computed(() => {
  return {
    side: 'bottom' as const,
    align: 'start' as const,
    sideOffset: 4,
    portalProps: props.portalProps,
    popupProps: props.popupProps,
    ...props.positionerProps
  };
});
</script>

<template>
  <DatePickerRoot v-slot="slotProps" v-bind="forwardedProps" v-on="listeners">
    <PopoverTrigger v-bind="triggerProps">
      <slot name="trigger" :open="slotProps.open" :model-value="slotProps.modelValue">
        <Icon icon="lucide:calendar" />
        <span v-if="slotProps.modelValue">{{ slotProps.modelValue.toString() }}</span>
        <span v-else>{{ triggerPlaceholder }}</span>
      </slot>
    </PopoverTrigger>
    <DatePickerContent v-slot="contentSlotProps" v-bind="mergedPositionerProps">
      <slot v-bind="contentSlotProps" />
    </DatePickerContent>
  </DatePickerRoot>
</template>
