import type {
  CommandCompactEmits,
  CommandCompactProps,
  CommandCompactSlots,
  CommandSingleOptionData,
  CommandUi
} from '@soybeanjs/headless/command';
import type { ClassValue } from '@soybeanjs/headless';
import type { ThemeSize } from '@/theme';

export interface CommandProps<
  T extends CommandSingleOptionData = CommandSingleOptionData
> extends CommandCompactProps<T> {
  /** Root class. */
  class?: ClassValue;
  size?: ThemeSize;
  ui?: Partial<CommandUi>;
}

export type CommandEmits = CommandCompactEmits;

export type CommandSlots<T extends CommandSingleOptionData = CommandSingleOptionData> = CommandCompactSlots<T>;
