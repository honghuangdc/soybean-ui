import type { EmblaOptionsType as CarouselOptions, EmblaPluginType as CarouselPlugin } from 'embla-carousel';
import type { EmblaCarouselVueType } from 'embla-carousel-vue';
import type { ButtonProps } from '../button/types';
import type { ComputedRef, HTMLAttributes, Ref, ShallowRef } from 'vue';
import type { DataOrientation, Direction, UiClass } from '../../types';

export interface CarouselRootProps extends /** @vue-ignore */ Omit<HTMLAttributes, 'onSelect'> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin[];
  orientation?: DataOrientation;
  dir?: Direction;
}

export type CarouselApi = NonNullable<EmblaCarouselVueType[1]['value']>;

export type CarouselRootEmits = {
  initApi: [api: CarouselApi];
};

export interface CarouselContentProps extends /** @vue-ignore */ HTMLAttributes {}

export interface CarouselItemProps extends /** @vue-ignore */ HTMLAttributes {}

export interface CarouselPreviousProps extends ButtonProps {}

export interface CarouselNextProps extends ButtonProps {}

export interface CarouselRootContext {
  dir: ComputedRef<Direction>;
  orientation: ComputedRef<DataOrientation>;
  carouselRef: Ref<HTMLElement | undefined>;
  carouselApi: Ref<CarouselApi | undefined>;
  contentId: ShallowRef<string>;
  canScrollNext: ShallowRef<boolean>;
  canScrollPrev: ShallowRef<boolean>;
  selectedIndex: ShallowRef<number>;
  scrollSnaps: ShallowRef<number[]>;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number, jump?: boolean) => void;
  setContentId: (id: string) => void;
}

export type CarouselUiSlot = 'root' | 'content' | 'container' | 'item' | 'previous' | 'next';

export type CarouselUi = UiClass<CarouselUiSlot>;

export type { CarouselOptions, CarouselPlugin };
