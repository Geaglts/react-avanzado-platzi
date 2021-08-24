import React from 'react';
import { Layout } from '../components/Layout';
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery';

export const Details = ({ detailId }) => (
  <Layout title={`${detailId} Details`}>
    <PhotoCardWithQuery detailId={detailId} />
  </Layout>
);
