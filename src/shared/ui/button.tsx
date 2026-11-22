import type { ComponentProps } from 'react';

const variants = {
  default: 'bg-slate-900 text-white',
  outline: 'border border-current',
  ghost: 'bg-transparent',
};

const sizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-2',
  lg: 'px-4 py-3',
};

type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  variant = 'default',
  size = 'md',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex rounded-md cursor-pointer',
    'disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button {...props} type={type} className={classes} />;
}
