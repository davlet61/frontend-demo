import { ReactNode } from 'react';

export interface ContainerProps {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
}

export const Container = ({ title, action, children }: ContainerProps) => (
  <div className="mx-auto w-full bg-white p-6 shadow-lg dark:bg-gray-800 sm:my-8 sm:max-w-lg sm:rounded-xl">
    {(title || action) && (
      <div className="mb-4 flex items-center justify-between">
        {title && <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>}
        {action}
      </div>
    )}
    {children}
  </div>
);
