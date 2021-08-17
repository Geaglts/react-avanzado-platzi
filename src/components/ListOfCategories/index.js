import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfcategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://petgram-server-geaglts.vercel.app/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

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
