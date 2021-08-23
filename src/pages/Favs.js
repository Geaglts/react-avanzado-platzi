import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FAVS } from '../graphql/queries';

import { HeaderSection } from '../components/HeaderSection';
import { Loading } from '../components/Loading';
import { ListOfFavorites } from '../components/ListOfFavorites';

export const Favs = () => {
  const { data: { favs = [] } = {}, loading } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection
        title="Favoritos"
        description="Estos son todos tus animales favoritos 🐶"
      />
      <ListOfFavorites favs={favs} />
    </>
  );
};
