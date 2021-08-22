import styled from 'styled-components';
import { rotate } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 315px;
`;

export const Content = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${rotate}
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #4e9ad8;
  border-radius: 50px;
`;
