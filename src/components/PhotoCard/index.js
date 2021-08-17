import React, { useRef, useEffect, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Button, ImgWrapper, Article } from './styles';

export const PhotoCard = ({
  likes = 0,
  src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}) => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(isIntersecting);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  return (
    <Article ref={element}>
      {show && (
        <>
          <ImgWrapper>
            <img src={src} />
          </ImgWrapper>
          <Button>
            <MdFavoriteBorder size="28px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
