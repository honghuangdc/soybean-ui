import type { ClassValue, UiClass } from '@soybeanjs/headless';
import type { AnchorCompactEmits, AnchorCompactProps, AnchorUiSlot } from '@soybeanjs/headless/anchor';
import type { ThemeColor, ThemeSize } from '@/theme';

export type AnchorExtraUiSlot = Exclude<AnchorUiSlot, 'root' | 'link'>;

export type AnchorExtendedUi = UiClass<AnchorUiSlot>;

export interface AnchorProps extends AnchorCompactProps {
  color?: ThemeColor;
  size?: ThemeSize;
  ui?: Partial<AnchorExtendedUi>;
  class?: ClassValue;
  sticky?: boolean;
}

export type AnchorEmits = AnchorCompactEmits;
