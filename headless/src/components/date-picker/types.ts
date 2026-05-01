import type { DateValue } from '@internationalized/date';
import type { ComputedRef, HTMLAttributes, ShallowRef } from 'vue';
import type { DateStep, Formatter, Granularity, HourCycle, Matcher, SegmentPart } from '../../date';
import type { Direction, FormFieldCommonProps, PropsToContext, UiClass } from '../../types';
import type {
  PopoverRootProps,
  PopoverPositionerProps as DatePickerPositionerProps,
  PopoverPositionerEmits as DatePickerPositionerEmits,
  PopoverPopupProps as DatePickerPopupProps,
  PopoverTriggerProps as DatePickerTriggerProps,
  PopoverUiSlot
} from '../popover/types';
import type { PortalProps as DatePickerPortalProps } from '../portal/types';
import type { PrimitiveProps } from '../primitive/types';

export interface DatePickerRootProps
  extends
    PrimitiveProps,
    FormFieldCommonProps,
    PopoverRootProps,
    /** @vue-ignore */ Omit<HTMLAttributes, 'placeholder'> {
  defaultValue?: DateValue;
  defaultPlaceholder?: DateValue;
  placeholder?: DateValue;
  modelValue?: DateValue;
  hourCycle?: HourCycle;
  step?: DateStep;
  granularity?: Granularity;
  hideTimeZone?: boolean;
  maxValue?: DateValue;
  minValue?: DateValue;
  locale?: string;
  disabled?: boolean;
  readonly?: boolean;
  isDateUnavailable?: Matcher;
  id?: string;
  dir?: Direction;
}

export type DatePickerRootEmits = {
  'update:modelValue': [date: DateValue | undefined];
  'update:placeholder': [date: DateValue];
  'update:open': [open: boolean];
};

export interface DatePickerSlotProps {
  modelValue: DateValue | undefined;
  placeholder: DateValue;
  setPlaceholder: (date: DateValue) => void;
  setDate: (date: DateValue | undefined) => void;
  open?: boolean;
}

export type DatePickerRootSlots = {
  default?: (props: DatePickerSlotProps) => any;
};

export interface DatePickerInputProps extends PrimitiveProps, /** @vue-ignore */ HTMLAttributes {
  part: SegmentPart;
}

export interface DatePickerRootContext extends PropsToContext<DatePickerRootProps, 'disabled' | 'readonly'> {
  locale: ComputedRef<string>;
  dir: ComputedRef<Direction>;
  modelValue: ShallowRef<DateValue | undefined>;
  placeholder: ShallowRef<DateValue>;
  isDateUnavailable?: Matcher;
  isInvalid: ComputedRef<boolean>;
  formatter: Formatter;
  hourCycle: HourCycle;
  step: ComputedRef<DateStep>;
  isPlaceholderFocusable: ComputedRef<boolean>;
  hasSelectedDate: ComputedRef<boolean>;
  isSelectedDateDisabled: ComputedRef<boolean>;
  minValue: ComputedRef<DateValue | undefined>;
  maxValue: ComputedRef<DateValue | undefined>;
  onDateChange: (date: DateValue | undefined) => void;
  onPlaceholderChange: (date: DateValue) => void;
  isDateDisabled: Matcher;
  isDateSelected: Matcher;
  open: ShallowRef<boolean | undefined>;
  setOpen: (value: boolean) => void;
}

export interface DatePickerContentProps extends DatePickerPositionerProps {
  popupProps?: DatePickerPopupProps;
  portalProps?: DatePickerPortalProps;
}

export type DatePickerContentEmits = DatePickerPositionerEmits;

export type DatePickerContentSlots = {
  default?: (props: DatePickerSlotProps) => any;
};

export interface DatePickerCompactProps extends DatePickerRootProps {
  triggerPlaceholder?: string;
  positionerProps?: DatePickerPositionerProps;
  popupProps?: DatePickerPopupProps;
  portalProps?: DatePickerPortalProps;
  triggerProps?: DatePickerTriggerProps;
}

export type DatePickerCompactEmits = DatePickerRootEmits;

export type DatePickerCompactSlots = DatePickerContentSlots & {
  trigger?: (props: { modelValue: DateValue | undefined; open?: boolean }) => any;
};

export type DatePickerUiSlot = PopoverUiSlot | 'root';

export type DatePickerUi = UiClass<DatePickerUiSlot>;

export type {
  DatePickerPortalProps,
  DatePickerPositionerProps,
  DatePickerPositionerEmits,
  DatePickerPopupProps,
  DatePickerTriggerProps
};
