import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [houseFilter, setHouseFilter] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    axios("https://hp-api.onrender.com/api/characters")
      .then((res) => setCharacters(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    const isFav = favorites.some((fav) => fav.name === character.name);
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.name !== character.name));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

  const filteredCharacters = characters
    .filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((char) => (houseFilter ? char.house === houseFilter : true));

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#ffffff] mb-6">
        🧙‍♂️ Personajes
      </h1>

      <input
        type="text"
        placeholder="Buscar personaje..."
        className="w-full p-2 mb-4 border rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="w-full p-2 mb-6 border rounded-md"
        value={houseFilter}
        onChange={(e) => setHouseFilter(e.target.value)}
      >
        <option value="">Todas las casas</option>
        {houses.map((house) => (
          <option key={house} value={house}>
            {house}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCharacters.map((char) => (
          <div
            key={char.name}
            className="flex flex-col md:flex-row w-full md:max-w-2x bg-[url('https://static4.depositphotos.com/1000401/289/v/450/depositphotos_2897034-stock-illustration-old-paper-or-parchment.jpg')] bg-cover bg-center bg-no-repeat text-gray-800 border-[3px] border-yellow-900 rounded-xl shadow-lg p-4 hover:scale-[1.01] transition-all"
          >
            {char.image && (
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-48 object-contain rounded-md mb-2 shadow-md"
                />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#740001]">{char.name}</h2>
              <p className="text-sm text-gray-700">{char.house || "Sin casa"}</p>
              <p className="text-xs text-gray-600 mt-1">
                {char.actor && `Interpretado por: ${char.actor}`}
                {char.dateOfBirth && <p><strong>Nacimiento:</strong> {char.dateOfBirth}</p>}
              </p>
            </div>
            <button
              onClick={() => toggleFavorite(char)}
              className="absolute top-3 right-3 text-red-500 text-2xl hover:text-red-700 transition-colors"
            >
              {favorites.some((fav) => fav.name === char.name) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
