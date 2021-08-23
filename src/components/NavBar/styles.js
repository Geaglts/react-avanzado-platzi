import styled, { css } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav`
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  max-width: 500px;
`;

export const Link = styled(LinkRouter)`
  cursor: pointer;
  font-weight: bold;
  font-size: 12pt;
  width: calc(100% / 3);
  height: 100%;
  padding: 15px 0;
  text-decoration: none;
  text-align: center;
  color: #222;
  &:hover {
    color: #618ee8;
    transition: transform 250ms linear;
    transform: scale(1.1);
  }
  &[aria-current] {
    color: #618ee8;
    &::after {
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 24pt;
      margin-left: -17px;
    }
  }
`;
