<script setup lang="ts">
import { useOmitProps, useForwardListeners } from '../../composables';
import { PopoverPortal, PopoverPositioner, PopoverPopup } from '../popover';
import { useDatePickerRootContext } from './context';
import type { DatePickerContentProps, DatePickerContentEmits, DatePickerContentSlots } from './types';

defineOptions({
  name: 'DatePickerContent'
});

const props = withDefaults(defineProps<DatePickerContentProps>(), {
  avoidCollisions: true,
  prioritizePosition: true
});

const emit = defineEmits<DatePickerContentEmits>();

defineSlots<DatePickerContentSlots>();

const forwardedPositionerProps = useOmitProps(props, ['popupProps', 'portalProps']);

const listeners = useForwardListeners(emit);

const { modelValue, open, placeholder, onDateChange, onPlaceholderChange } =
  useDatePickerRootContext('DatePickerContent');
</script>

<template>
  <PopoverPortal v-bind="portalProps">
    <PopoverPositioner v-bind="forwardedPositionerProps" v-on="listeners">
      <PopoverPopup v-bind="popupProps">
        <slot
          :open="open"
          :model-value="modelValue"
          :placeholder="placeholder"
          :set-date="onDateChange"
          :set-placeholder="onPlaceholderChange"
        />
      </PopoverPopup>
    </PopoverPositioner>
  </PopoverPortal>
</template>
