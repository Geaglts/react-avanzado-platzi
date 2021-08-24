import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/Layout';
import { ListOfcategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

export const Home = ({ id }) => {
  return (
    <Layout>
      <ListOfcategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
