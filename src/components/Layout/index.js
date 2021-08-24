import React from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({ title = 'Home', description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Petsgram</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};
