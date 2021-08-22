import React from 'react';
import { ListOfcategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfcategories />
      <ListOfPhotoCards categoryId={2} />
    </>
  );
};

export default App;
