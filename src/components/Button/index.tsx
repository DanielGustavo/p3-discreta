import { HTMLAttributes, HTMLProps, PropsWithChildren } from 'react';

import * as S from './styles';

type TButton = Omit<HTMLProps<HTMLButtonElement>, 'size'> &
  PropsWithChildren & {
    outlined?: boolean;
    variation?: S.TButtonVariation;
    size?: S.TButtonSize;
  };

function Button({
  children,
  outlined = false,
  variation = 'primary',
  size = 'small',
  ...rest
}: TButton) {
  function getColor() {
    if (outlined) {
      return variations.outlined[variation].color;
    }

    return variations.filled[variation].color;
  }

  function getBackground() {
    if (outlined) {
      return variations.outlined[variation].background;
    }

    return variations.filled[variation].background;
  }

  return (
    <S.Container
      type="button"
      {...(rest as HTMLAttributes<HTMLButtonElement>)}
      outlined={outlined}
      color={getColor()}
      background={getBackground()}
      size={size}
    >
      {children}
    </S.Container>
  );
}

const variations = {
  filled: {
    primary: {
      color: '#0A0A0A',
      background: '#06F08D',
    },
    light: {
      color: '#0A0A0A',
      background: '#FEFEFE',
    },
    error: {
      color: '#FEFEFE',
      background: '#FF2231',
    },
  },
  outlined: {
    primary: {
      color: '#06F08D',
      background: '#06F08D',
    },
    light: {
      color: '#FEFEFE',
      background: '#FEFEFE',
    },
    error: {
      color: '#FF2231',
      background: '#FF2231',
    },
  },
};

export default Button;
