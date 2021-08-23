import React, { useContext } from 'react';
import { Context } from '../Context';

import { HeaderSection } from '../components/HeaderSection';

import { Button } from '../components/UserForm/styles';

export const User = () => {
  const { removeAuth } = useContext(Context);

  const removeSession = () => {
    removeAuth();
  };

  return (
    <>
      <HeaderSection title="Perfil" description="Bienvenido a tu perfil" />
      <Button only red onClick={removeSession}>
        Cerrar sesion
      </Button>
    </>
  );
};
