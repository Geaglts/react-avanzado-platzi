import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfcategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

const HomePage = ({ id }) => {
  return (
    <Layout>
      <ListOfcategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});
