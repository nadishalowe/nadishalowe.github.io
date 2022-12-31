import styled from 'styled-components';

export const ButtonWrappeer = styled.button`
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  font-size: 16px;
  line-height: 21px;
  color: white;
`;
