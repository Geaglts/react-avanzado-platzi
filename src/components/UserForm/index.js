import React from 'react';
import { Form, Input, Button, Label, Error } from './styles';

import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit, label, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Label>&gt; {label}</Label>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} type="text" placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button disabled={disabled}>{label}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  );
};
