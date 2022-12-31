import { PropsWithChildren } from 'react';

import { ButtonWrappeer } from './Button.styled';

type ButtonProps = {
  href?: string;
}

export const Button = ({ href, children }: PropsWithChildren<ButtonProps>) => {
  const tag = href ? 'a' : 'button';

  return <ButtonWrappeer href={href} as={tag}>{children}</ButtonWrappeer>
};
