// @unocss-include
import { tv } from 'tailwind-variants';

export const datePickerVariants = tv({
  slots: {
    root: 'inline-flex',
    trigger: [
      'inline-flex items-center justify-start rounded-md border border-input bg-background  shadow-sm transition-colors',
      'hover:bg-accent/50 hover:text-accent-foreground',
      'outline-none focus-visible:ring-3 focus-visible:ring-offset-background focus-visible:ring-primary/30',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60',
      'data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground'
    ],
    positioner: 'w-max',
    popup: [
      `w-auto rounded-md border bg-popover text-popover-foreground outline-none z-50 will-change-transform`,
      `data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,
      `data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`,
      `data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`
    ]
  },
  variants: {
    size: {
      xs: {
        root: 'text-2xs',
        popup: 'text-2xs',
        trigger: 'gap-1 h-6 px-1.5'
      },
      sm: {
        root: 'text-xs',
        popup: 'text-xs',
        trigger: 'gap-1.5 h-7 px-2'
      },
      md: {
        root: 'text-sm',
        popup: 'text-sm',
        trigger: 'gap-2 h-8 px-2.5'
      },
      lg: {
        root: 'text-base',
        popup: 'text-base',
        trigger: 'gap-2.5 h-9 px-3'
      },
      xl: {
        root: 'text-lg',
        popup: 'text-lg',
        trigger: 'gap-3 h-10 px-3.5'
      },
      '2xl': {
        root: 'text-xl',
        popup: 'text-xl',
        trigger: 'gap-3.5 h-12 px-4'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});
