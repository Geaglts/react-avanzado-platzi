import styled from 'styled-components';

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  height: 300px;
  object-fit: cover;
  & img {
    width: 100%;
  }
`;

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
