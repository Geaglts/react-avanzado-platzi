import styled, { css } from 'styled-components';
import { down } from '../../styles/animations';

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        position: fixed;
        max-width: 450px;
        top: -30px;
        right: 0;
        left: 0;
        margin: 0 auto;
        padding: 5px;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        ${down({ time: '1s', scale: 0.5 })}
        z-index: 1;
      }
    `}
`;

export const Item = styled.ul`
  padding: 0 8px;
`;
