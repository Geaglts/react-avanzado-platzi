import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import { categories } from '../../../api/db.json';

export const ListOfcategories = () => {
  return (
    <List>
      {categories.map((cateogry) => (
        <Item key={cateogry.id}>
          <Category {...cateogry} />
        </Item>
      ))}
    </List>
  );
};
