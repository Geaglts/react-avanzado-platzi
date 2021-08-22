import styled from 'styled-components';

export const Button = styled.button`
  font-size: 14pt;
  display: flex;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;
  transition: transform 0.35s ease;
  & svg {
    margin-right: 5px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
