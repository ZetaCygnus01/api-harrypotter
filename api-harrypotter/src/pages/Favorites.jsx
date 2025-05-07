import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-yellow-700 text-center">Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="text-center">No hay personajes favoritos aún.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map((char) => (
            <div
              key={char.name}
              className="flex flex-col md:flex-row w-full md:max-w-2x bg-[url('https://static4.depositphotos.com/1000401/289/v/450/depositphotos_2897034-stock-illustration-old-paper-or-parchment.jpg')] bg-cover bg-center bg-no-repeat text-gray-800 border-[3px] border-yellow-900 rounded-xl shadow-lg p-4 hover:scale-[1.01] transition-all relative"
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
                </p>
                {char.dateOfBirth && (
                  <p className="text-xs text-gray-600">
                    <strong>Nacimiento:</strong> {char.dateOfBirth}
                  </p>
                )}
                <button
                  onClick={() => removeFromFavorites(char.id)}
                  className="mt-2 px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
                >
                  Eliminar de favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );  
};

export default Favorites;

