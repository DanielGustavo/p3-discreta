import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export type TButtonVariation = 'primary' | 'light' | 'error';
export type TButtonSize = 'x-small' | 'small' | 'medium';

type TContainer = {
  outlined: boolean;
  color: string;
  background: string;
  size: TButtonSize;
};

function getSize(size: TButtonSize) {
  if (size === 'medium') {
    return { font: '24px', padding: '14px 32px' };
  }

  if (size === 'x-small') {
    return { font: '14px', padding: '12px 16px' };
  }

  return { font: '16px', padding: '14px 20px' };
}

export const Container = styled.button<TContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ color }) => color};

  width: fit-content;
  height: fit-content;

  border: none;
  border-radius: 10px;

  font-weight: 600;

  ${({ size }) => {
    const { font, padding } = getSize(size);

    return css`
      padding: ${padding};
      font-size: ${font};
    `;
  }}

  ${({ outlined, background }) => {
    if (outlined) {
      return css`
        outline: 2px solid ${background};
        background: none;
      `;
    }

    return css`
      background: ${background};
    `;
  }}

  transition: 300ms;

  &:hover {
    transform: scale(1.015);
    color: ${({ color }) => lighten(0.1, color)};

    ${({ outlined, background }) => {
      if (outlined) {
        return css`
          outline-color: ${lighten(0.1, background)};
        `;
      }

      return css`
        background: ${lighten(0.1, background)};
      `;
    }}
  }

  &:active {
    transform: scale(1);

    color: ${({ color }) => darken(0.1, color)};

    ${({ outlined, background }) => {
      if (outlined) {
        return css`
          outline-color: ${darken(0.1, background)};
        `;
      }

      return css`
        background: ${darken(0.1, background)};
      `;
    }}
  }
`;
