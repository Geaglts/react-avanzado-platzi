import React, { useRef, useEffect, useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button, ImgWrapper, Article } from './styles';

export const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}) => {
  const key = `liked - ${id}`;
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(() => {
    try {
      const liked = window.localStorage.getItem(key);
      const parseLiked = JSON.parse(liked);
      return parseLiked;
    } catch (e) {
      return false;
    }
  });
  const element = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(isIntersecting);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.log(error);
    }
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <ImgWrapper>
            <img src={src} />
          </ImgWrapper>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="28px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
