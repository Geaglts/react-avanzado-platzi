import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Context } from '../Context';

import { UserForm } from '../components/UserForm';
import { HeaderSection } from '../components/HeaderSection';

import { SIGN_UP, LOGIN } from '../graphql/mutations';

// geaglts@gmail.com

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);
  const [signupError, setSignupError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [signupLoading, setSignupLoading] = useState(null);
  const [loginLoading, setLoginLoading] = useState(null);
  const [signup] = useMutation(SIGN_UP);
  const [login] = useMutation(LOGIN);

  const signUpUser = async (values) => {
    const input = values;
    const variables = { input };
    try {
      setSignupLoading(true);
      setSignupError(null);
      const { data } = await signup({ variables });
      const token = data.signup;
      activateAuth(token);
    } catch (error) {
      setSignupError('El email existe u ocurrió otro problema');
    } finally {
      setSignupLoading(false);
    }
  };

  const loginUser = async (values) => {
    const input = values;
    const variables = { input };
    try {
      setLoginLoading(true);
      setLoginError(null);
      const { data } = await login({ variables });
      const token = data.login;
      activateAuth(token);
    } catch (error) {
      setLoginError('Credenciales incorrectas');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <>
      <HeaderSection
        title="Acceso"
        description="Para acceder a esta sección debes haber iniciado sesión."
      />
      <UserForm
        onSubmit={signUpUser}
        error={signupError}
        disabled={signupLoading}
        label="Registrarse"
      />
      <UserForm
        onSubmit={loginUser}
        error={loginError}
        disabled={loginLoading}
        label="Iniciar sesión"
      />
    </>
  );
};
