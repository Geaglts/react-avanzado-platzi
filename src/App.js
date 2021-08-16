import React from 'react';
import { ListOfcategories } from './components/ListOfCategories';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfcategories />
    </>
  );
};

export default App;
