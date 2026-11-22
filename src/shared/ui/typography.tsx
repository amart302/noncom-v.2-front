import type { ComponentPropsWithoutRef } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  p: 'text-base font-normal',
};

type TypographyProps = ComponentPropsWithoutRef<'p'> & {
  variant?: TypographyVariant;
  component?: TypographyVariant;
};

export function Typography({
  component: Tag = 'p',
  variant = 'p',
  className,
  ...props
}: TypographyProps) {
  const classes = [variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return <Tag {...props} className={classes} />;
}
