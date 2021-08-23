import React from 'react';
import { Container } from './styles';

import { Favorite } from '../Favorite';

export const ListOfFavorites = ({ favs = [] }) => {
  return (
    <Container>
      {favs.map((item) => {
        return <Favorite key={item.id} {...item} />;
      })}
    </Container>
  );
};
