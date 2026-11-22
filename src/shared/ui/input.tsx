import { type ComponentProps, useId } from 'react';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  error?: string;
};

export function Input({
  id,
  label,
  error,
  className,
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const descriptionIds = [describedBy, error ? errorId : undefined]
    .filter(Boolean)
    .join(' ');

  const classes = [
    'w-full rounded-md border px-3 py-2 disabled:opacity-50',
    error ? 'border-red-500' : 'border-slate-300',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={inputId}>{label}</label>}

      <input
        {...props}
        id={inputId}
        className={classes}
        aria-invalid={error ? true : invalid}
        aria-describedby={descriptionIds || undefined}
      />

      {error && (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
