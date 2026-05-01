import type { ClassValue } from '@soybeanjs/headless';
import type { DateFieldCompactProps, DateFieldCompactEmits, DateFieldUi } from '@soybeanjs/headless/date-field';
import type { ThemeSize } from '@/theme';

export interface DateFieldProps extends DateFieldCompactProps {
  class?: ClassValue;
  size?: ThemeSize;
  ui?: Partial<DateFieldUi>;
}

export type DateFieldEmits = DateFieldCompactEmits;
