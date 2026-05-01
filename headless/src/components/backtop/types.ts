import type { AffixTarget } from '../affix/types';
import type { ButtonProps } from '../button/types';

export type BacktopTarget = AffixTarget;

export type BacktopState = 'visible' | 'hidden';

export interface BacktopProps extends /** @vue-ignore */ Omit<ButtonProps, 'onChange'> {
  /**
   * Scroll distance that must be reached before the Backtop button becomes visible.
   *
   * @defaultValue 400
   */
  visibilityHeight?: number;
  /**
   * Scroll target that Backtop listens to and scrolls.
   *
   * @defaultValue window
   */
  target?: BacktopTarget | null;
  /**
   * Duration of the scroll-to-top animation in milliseconds.
   *
   * @defaultValue 300
   */
  duration?: number;
}

export type BacktopEmits = {
  change: [visible: boolean];
  click: [event: MouseEvent];
};
