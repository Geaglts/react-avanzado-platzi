import React from 'react';
import { ListOfcategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfcategories />
      <ListOfPhotoCards />
    </>
  );
};

export default App;
