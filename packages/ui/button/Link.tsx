import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

export const Link = (props: ButtonOrLinkProps) => (
  <ButtonOrLink
    className="font-medium text-gray-900 underline hover:text-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:text-gray-100"
    {...props}
  />
);
