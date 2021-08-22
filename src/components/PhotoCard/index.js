import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button, ImgWrapper, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `liked - ${id}`;
  const [show, element] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <>
          <ImgWrapper>
            <img src={src} />
          </ImgWrapper>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="28px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};