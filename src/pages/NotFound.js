import React from 'react';
import { Layout } from '../components/Layout';

export const NotFound = () => {
  return (
    <Layout title="Not Found">
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe o no está disponible.</p>
    </Layout>
  );
};
