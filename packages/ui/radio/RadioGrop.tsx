import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { cva, VariantProps } from 'class-variance-authority';
import { SetStateAction, useState } from 'react';
import { type Control, Controller } from 'react-hook-form';

const priorities = ['low', 'medium', 'high'];

const radioStyles = cva('relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none', {
  variants: {
    active: {
      true: 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300',
    },
    checked: {
      true: 'bg-brand-400 text-white',
      false: 'bg-white',
    },
  },
  defaultVariants: {
    active: false,
  },
});

export interface RadioProps extends VariantProps<typeof radioStyles> {
  label: string;
  control: Control<any, any>;
}

export const Radio = ({ label, control }: RadioProps) => {
  const [selected, setSelected] = useState(priorities[0]);

  return (
    <div className="mx-auto w-full max-w-md">
      <Controller
        control={control}
        name="priority"
        render={({ field }) => (
          <RadioGroup
            value={selected}
            onChange={(e: SetStateAction<string>) => {
              field.onChange(e);
              setSelected(e);
            }}
          >
            <RadioGroup.Label className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</RadioGroup.Label>
            <div className="flex items-center justify-between">
              {priorities.map((p, i) => (
                <RadioGroup.Option
                  key={i}
                  value={p}
                  className={({ active, checked }) => radioStyles({ active, checked })}
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between gap-2">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                            >
                              {p}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="bg-brand-100 text-brand-700 shrink-0 rounded-full p-1">
                            <CheckIcon className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
      />
    </div>
  );
};
