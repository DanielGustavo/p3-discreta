import React, { forwardRef, InputHTMLAttributes } from 'react';

import * as S from './styles';

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  textarea?: boolean;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, TInput> = (
  { label, textarea, ...rest },
  ref
) => {
  return (
    <S.Container>
      <span>{label}</span>

      {textarea ? (
        <S.TextareaElement
          {...(rest as InputHTMLAttributes<HTMLTextAreaElement>)}
          rows={4}
          ref={ref as any}
        />
      ) : (
        <S.InputElement {...rest} ref={ref as any} />
      )}
    </S.Container>
  );
};

export default forwardRef(Input);
