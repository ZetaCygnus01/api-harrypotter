import { useEffect, useState } from 'react';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.name === character.name);
      if (exists) {
        return prev.filter((fav) => fav.name !== character.name);
      } else {
        return [...prev, character];
      }
    });
  };

  const isFavorite = (name) => favorites.some((fav) => fav.name === name);

  return { favorites, toggleFavorite, isFavorite };
}