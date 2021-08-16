import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfcategories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map((cateogry) => (
        <Item key={cateogry}>
          <Category emogi="🐈" />
        </Item>
      ))}
    </List>
  );
};
