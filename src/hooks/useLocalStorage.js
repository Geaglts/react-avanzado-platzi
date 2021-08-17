import { useState } from 'react';

export function useLocalStorage(key, initialState) {
  const [storedValue, setValue] = useState(() => {
    try {
      const liked = window.localStorage.getItem(key);
      const parseLiked = liked ? JSON.parse(liked) : initialState;
      return parseLiked;
    } catch (e) {
      return initialState;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.log(error);
    }
  };

  return [storedValue, setLocalStorage];
}
