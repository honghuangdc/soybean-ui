import type { ButtonHTMLAttributes, ShallowRef } from 'vue';
import type {
  DismissableLayerEmits,
  DismissableLayerProps,
  FocusScopeEmits,
  ForceMountProps,
  TrapFocusProps,
  MaybePromise,
  PropsToContext,
  UiClass
} from '../../types';
import type { PrimitiveProps } from '../primitive/types';
import type { DialogRootEmits, DialogBaseProps } from '../dialog/types';
import type { PopperPopupProps, PopperPositionerProps, PopperArrowProps, PopperUiSlot } from '../popper/types';
import type { PortalProps } from '../portal/types';

export interface PopoverRootProps extends DialogBaseProps {
  disabled?: boolean;
}

export type PopoverRootEmits = DialogRootEmits;

export interface PopoverCloseProps extends PrimitiveProps, /** @vue-ignore */ ButtonHTMLAttributes {
  beforeClose?: () => MaybePromise<boolean | void>;
}
export type PopoverCloseEmits = {
  close: [];
};

export interface PopoverPositionerImplProps extends PopperPositionerProps, TrapFocusProps, DismissableLayerProps {}
export type PopoverPositionerImplEmits = DismissableLayerEmits & FocusScopeEmits;

export interface PopoverPositionerProps extends PopperPositionerProps, ForceMountProps {}
export type PopoverPositionerEmits = PopoverPositionerImplEmits;

export interface PopoverPopupProps extends PopperPopupProps {}

export interface PopoverTriggerProps extends PrimitiveProps, /** @vue-ignore */ ButtonHTMLAttributes {}

export interface PopoverRootContextParams extends PropsToContext<PopoverRootProps, 'modal' | 'disabled'> {
  open: ShallowRef<boolean | undefined>;
}

export type { PopperAnchorProps as PopoverAnchorProps } from '../popper/types';

export interface PopoverCompactProps extends PopoverRootProps {
  placement?: PopperPositionerProps['placement'];
  showArrow?: boolean;
  triggerProps?: PopoverTriggerProps;
  portalProps?: PortalProps;
  positionerProps?: PopoverPositionerProps;
  popupProps?: PopoverPopupProps;
  arrowProps?: PopperArrowProps;
  closeProps?: PopoverCloseProps;
}

export type PopoverCompactEmits = PopoverRootEmits & PopoverPositionerEmits;

export interface PopoverCompactSlots {
  default?: () => any;
  trigger?: () => any;
  close?: () => any;
}

export type PopoverUiSlot = PopperUiSlot | 'trigger';

export type PopoverUi = UiClass<PopoverUiSlot>;
