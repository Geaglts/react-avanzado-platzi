import React from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery';

// Pages
import { Home } from './pages/Home';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? <PhotoCardWithQuery detailId={detailId} /> : <Home />}
    </>
  );
};

export default App;
