import React from 'react';
import { Description, Title } from './styles';

export const HeaderSection = ({ title = '', description = '' }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
};
