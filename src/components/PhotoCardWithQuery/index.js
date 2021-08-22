import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { PhotoCard } from '../PhotoCard';
import { Loading } from '../Loading';

export const PHOTO = gql`
  query ($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      liked
      likes
      userId
    }
  }
`;

export function PhotoCardWithQuery({ detailId }) {
  const { data: { photo = {} } = {}, loading } = useQuery(PHOTO, {
    variables: { id: detailId },
  });

  if (loading) return <Loading />;

  return <PhotoCard {...photo} />;
}
