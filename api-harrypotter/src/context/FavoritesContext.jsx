// src/context/FavoritesContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === character.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== character.id);
      } else {
        return [...prev, character];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

