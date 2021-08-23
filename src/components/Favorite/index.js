import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Container, Image, LikesContainer, LikesLabel } from './styles';

export const Favorite = ({ src, likes }) => {
  return (
    <Container>
      <Image src={src} />
      <LikesContainer>
        <MdFavorite size="22px" color="red" />
        <LikesLabel>{likes}</LikesLabel>
      </LikesContainer>
    </Container>
  );
};
