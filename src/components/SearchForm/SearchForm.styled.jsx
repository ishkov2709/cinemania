import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;

  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 48px 10px 24px;

  color: #000;

  border-radius: 8px;
  border: 2px solid #909090;

  transition: border 250ms linear;

  &,
  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  &::placeholder {
    color: #777777;
  }

  &:focus {
    outline: none;

    border: 2px solid #e7671d;
  }

  @media screen and (min-width: 744px) {
    &,
    &::placeholder {
      font-size: 24px;
    }
  }
`;

export const BtnForm = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: transparent;
  border: none;

  padding: 0;

  animation: smoothOpacity 2000ms 1 linear;
`;
