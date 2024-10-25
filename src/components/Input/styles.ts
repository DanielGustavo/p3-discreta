import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-weight: 600;
    font-size: 12px;
    color: #f1efe6;
  }
`;

export const InputElement = styled.input`
  border: 1px solid #3f3f3f;
  outline: none;
  border-radius: 10px;

  padding: 16px 12px;
  background: #161616;

  color: #fefefe;
  font-size: 14px;
  font-weight: 300;

  &::placeholder {
    color: #757575;
  }
`;

export const TextareaElement = styled.textarea`
  border: 1px solid #3f3f3f;
  outline: none;
  border-radius: 10px;

  padding: 16px 12px;
  background: #161616;
  resize: none;

  color: #fefefe;
  font-size: 14px;
  font-weight: 300;

  &::placeholder {
    color: #757575;
  }
`;
