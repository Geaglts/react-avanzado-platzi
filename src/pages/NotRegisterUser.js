import React from 'react';
import Context from '../Context';

import { UserForm } from '../components/UserForm';
import { HeaderSection } from '../components/HeaderSection';

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <HeaderSection
              title="Acceso"
              description="Para acceder a esta sección debes haber iniciado sesión."
            />
            <UserForm onSubmit={activateAuth} label="Registrarse" />
            <UserForm onSubmit={activateAuth} label="Iniciar sesión" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
