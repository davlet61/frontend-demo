import { ComponentProps, forwardRef } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, type = 'text', ...props }, ref) {
  return (
    <label htmlFor={props.id}>
      <div className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</div>
      <input
        className="focus:border-brand-600 focus:ring-brand-500 w-full rounded-md border bg-white px-4 py-2 text-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200"
        type={type}
        ref={ref}
        {...props}
      />

      {/* <FieldError name={props.name} /> */}
    </label>
  );
});
