import React from 'react';
import { Form, Title, Description, Input, Button, Label } from './styles';

import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit, label }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <>
      <Label>&gt; {label}</Label>
      <Form onSubmit={onSubmit}>
        <Input type="text" name="" id="" placeholder="Email" {...email} />
        <Input type="password" name="" id="" placeholder="Password" {...password} />
        <Button>{label}</Button>
      </Form>
    </>
  );
};
