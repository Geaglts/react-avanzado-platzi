import React from 'react';
import { ListOfcategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

export const Home = ({ id }) => {
  return (
    <>
      <ListOfcategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};
