import { ComponentProps } from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        ' text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 items-center ',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};
