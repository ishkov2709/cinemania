import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  margin-top: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 48px 10px 24px;

  border-radius: 8px;
  border: 2px solid #909090;

  &,
  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  &::placeholder {
    color: #777777;
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
`;
