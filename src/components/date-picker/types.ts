import type {
  ClassValue,
  DatePickerUi,
  DatePickerCompactProps,
  DatePickerCompactEmits,
  DatePickerCompactSlots
} from '@soybeanjs/headless';
import type { ThemeSize } from '@/theme';

export interface DatePickerProps extends DatePickerCompactProps {
  class?: ClassValue;
  size?: ThemeSize;
  ui?: Partial<DatePickerUi>;
}

export type DatePickerEmits = DatePickerCompactEmits;

export type DatePickerSlots = DatePickerCompactSlots;
