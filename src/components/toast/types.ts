import type { ToastProviderProps as _ToastProviderProps, ToastUi } from '@soybeanjs/headless';
import type { ThemeSize } from '@/theme';

export interface ToastProviderProps extends _ToastProviderProps {
  size?: ThemeSize;
  ui?: ToastUi;
}
