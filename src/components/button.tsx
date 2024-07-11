import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '../lib/utils';

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex gap-2 items-center',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-900 hover:bg-lime-400 ',
      secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), props.className)}
    >
      {props.children}
    </button>
  );
};
