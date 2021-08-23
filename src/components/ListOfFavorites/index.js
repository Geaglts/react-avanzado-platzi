import React from 'react';
import { Container } from './styles';

import { Favorite } from '../Favorite';

export const ListOfFavorites = ({ list = [] }) => {
  return (
    <Container>
      {list.map((item) => {
        return <Favorite key={item.id} {...item} />;
      })}
    </Container>
  );
};
