import React from 'react';
import { ListOfcategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery detailId={detailId} />
      ) : (
        <>
          <ListOfcategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </>
  );
};

export default App;
