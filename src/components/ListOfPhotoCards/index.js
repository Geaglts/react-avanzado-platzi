import React from 'react';
import { useQuery } from '@apollo/client';
import { Loading } from '../Loading/';
import { PhotoCard } from '../PhotoCard';

import { ALL_PHOTOS } from '../../graphql/queries';

export const ListOfPhotoCards = ({ categoryId = 1 }) => {
  const { data: { photos = [] } = {}, loading } = useQuery(ALL_PHOTOS, {
    variables: { categoryId },
  });

  if (loading) return <Loading />;

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};
