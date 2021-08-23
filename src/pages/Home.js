import React from 'react';
import { ListOfcategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

export const Home = () => {
  return (
    <>
      <ListOfcategories />
      <ListOfPhotoCards categoryId={2} />
    </>
  );
};
