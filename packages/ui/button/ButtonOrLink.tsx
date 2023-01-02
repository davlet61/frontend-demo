import { ComponentProps } from 'react';

export type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export const ButtonOrLink = ({ href, ...props }: ButtonOrLinkProps) => {
  const isLink = typeof href !== 'undefined';

  const { ref, children, ...linkProps } = { ...props };

  return isLink ? (
    <a href={href} {...linkProps}>
      {children}
    </a>
  ) : (
    <button {...props} />
  );
};
