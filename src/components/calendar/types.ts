import type {
  ClassValue,
  CalendarCompactProps,
  CalendarCompactEmits,
  CalendarCompactSlots,
  CalendarUi
} from '@soybeanjs/headless';
import type { ThemeSize } from '@/theme';

export interface CalendarProps<M extends boolean = false> extends CalendarCompactProps<M> {
  class?: ClassValue;
  size?: ThemeSize;
  ui?: Partial<CalendarUi>;
}

export type CalendarEmits<M extends boolean = false> = CalendarCompactEmits<M>;

export type CalendarSlots<M extends boolean = false> = CalendarCompactSlots<M>;
