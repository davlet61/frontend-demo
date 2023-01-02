import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
];

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
}

export const ExampleRadioGroup = ({ label }: RadioProps) => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="p-2 text-2xl font-bold">{label}</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) => radioStyles({ active, checked })}
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span> <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="bg-brand-100 text-brand-700 shrink-0 rounded-full p-1">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
