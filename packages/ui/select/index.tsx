import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Option } from 'lib';
import { Fragment } from 'react';
import { type Control, Controller } from 'react-hook-form';

export interface SelectProps {
  options: Option;
  label: string;
  selectedOpt: Option[number];
  control: Control<any, any>;
  setSelected: (opt: Option[number]) => void;
}

export const Select = ({ options, selectedOpt, label, setSelected, control }: SelectProps) => {
  return (
    <Controller
      control={control}
      name="type"
      render={({ field }) => (
        <Listbox
          value={selectedOpt}
          onChange={(e) => {
            field.onChange(e);
            setSelected(e);
          }}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</Listbox.Label>
              <div className="relative mt-1">
                <Listbox.Button className="focus-visible:border-brand-600 focus-visible:ring-offset-brand-500 relative w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200">
                  <span className="block truncate">{selectedOpt}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    static
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {options.map((o, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-brand-400 text-white' : 'text-gray-900'
                          }`
                        }
                        value={o}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{o}</span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      )}
    />
  );
};
