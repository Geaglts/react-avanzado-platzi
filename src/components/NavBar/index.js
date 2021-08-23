import React from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavoriteBorder, MdSupervisorAccount } from 'react-icons/md';

const ICON_SIZE = '24px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={ICON_SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={ICON_SIZE} />
      </Link>
      <Link to="/profile">
        <MdSupervisorAccount size={ICON_SIZE} />
      </Link>
    </Nav>
  );
};
