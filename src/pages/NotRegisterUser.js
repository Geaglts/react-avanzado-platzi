import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Context from '../Context';

import { UserForm } from '../components/UserForm';
import { HeaderSection } from '../components/HeaderSection';

import { SIGN_UP, LOGIN } from '../graphql/mutations';

// geaglts@gmail.com

export const NotRegisterUser = () => {
  const [signupError, setSignupError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [signupLoading, setSignupLoading] = useState(null);
  const [loginLoading, setLoginLoading] = useState(null);
  const [signup] = useMutation(SIGN_UP);
  const [login] = useMutation(LOGIN);

  const signUpUser = (activateAuth) => async (values) => {
    const input = values;
    const variables = { input };
    try {
      setSignupLoading(true);
      setSignupError(null);
      const { data } = await signup({ variables });
      const token = data.signup;
      console.log(token);
      activateAuth();
    } catch (error) {
      setSignupError('El email existe u ocurrió otro problema');
    } finally {
      setSignupLoading(false);
    }
  };

  const loginUser = (activateAuth) => async (values) => {
    const input = values;
    const variables = { input };
    try {
      setLoginLoading(true);
      const { data } = await login({ variables });
      const token = data.login;
      console.log(token);
      activateAuth();
    } catch (error) {
      setLoginError('Credenciales incorrectas');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <HeaderSection
              title="Acceso"
              description="Para acceder a esta sección debes haber iniciado sesión."
            />
            <UserForm
              onSubmit={signUpUser(activateAuth)}
              error={signupError}
              disabled={signupLoading}
              label="Registrarse"
            />
            <UserForm
              onSubmit={loginUser(activateAuth)}
              error={loginError}
              disabled={loginLoading}
              label="Iniciar sesión"
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
