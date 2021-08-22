import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';
import { Loading } from '../Loading/';
import { PhotoCard } from '../PhotoCard';

const PHOTOS = gql`
  query {
    photos {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const ListOfPhotoCards = () => {
  const { data, loading } = useQuery(PHOTOS);

  if (loading) return <Loading />;

  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};
