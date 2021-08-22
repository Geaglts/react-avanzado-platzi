import React from 'react';
import { useMutation } from '@apollo/client';

import { FavButton } from '../FavButton';

import { ImgWrapper, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { LIKE_PHOTO } from '../../graphql/mutations';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `liked - ${id}`;
  const [show, element] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(key, false);
  const [likePhoto] = useMutation(LIKE_PHOTO);

  const handleFavClick = async () => {
    !liked &&
      (await likePhoto({
        variables: { input: { id } },
      }));
    setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
