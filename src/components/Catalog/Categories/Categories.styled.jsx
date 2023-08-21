import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const Btn = styled.button`
  min-width: calc((100% - 28px) / 3);
  padding: 8px;

  background-color: #fff;
  color: #000;

  border: 1px solid #000;
  border-radius: 8px;

  font-weight: 400;
  font-size: 10px;

  text-align: center;
  text-decoration: none;
`;
