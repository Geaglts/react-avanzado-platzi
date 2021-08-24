import React, { createContext, useState } from 'react';
export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('TOKEN');
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem('TOKEN', token);
      window.location = '/';
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('TOKEN');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default { Provider, Consumer: Context.Consumer };
