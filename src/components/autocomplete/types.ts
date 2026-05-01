import type {
  AutocompleteCompactEmits,
  AutocompleteCompactProps,
  AutocompleteCompactSlots,
  AutocompleteSingleOptionData,
  AutocompleteUi
} from '@soybeanjs/headless/autocomplete';
import type { ClassValue } from '@soybeanjs/headless';
import type { ThemeSize } from '@/theme';

export interface AutocompleteProps<
  T extends AutocompleteSingleOptionData = AutocompleteSingleOptionData
> extends AutocompleteCompactProps<T> {
  /** Root class. */
  class?: ClassValue;
  size?: ThemeSize;
  ui?: Partial<AutocompleteUi>;
}

export type AutocompleteEmits<T extends AutocompleteSingleOptionData = AutocompleteSingleOptionData> =
  AutocompleteCompactEmits<T>;

export type AutocompleteSlots<T extends AutocompleteSingleOptionData = AutocompleteSingleOptionData> =
  AutocompleteCompactSlots<T>;
