import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [search, SetSearch] = useState('');
    const [filtered, SetFiltered] = useState([]);
    const [houseFilter, SetHouseFilter] = useState(''); // Nuevo Filtro de Casa

    // Llamado a la API
    useEffect(() => {
        axios.get('https://hp-api.onrender.com/api/characters')
            .then(res => {
                setCharacters(res.data);
                SetFiltered(res.data);
        });
    }, []);

    // Filtro por busqueda y casa

    useEffect(() => {
        const results = characters.filter(char =>
            char.name.toLowerCase().includes(search.toLowerCase()) &&
            (houseFilter === '' || char.house === houseFilter) // Filtrar por casa
        );
        SetFiltered(results);
    }, [search, houseFilter, characters]);

    return (
    <div className="p-4">
        <h1 className="text-4xl md:text-4xl text-white font-harry text-center my-4 drop-shadow-lg">
            🧙‍♂️ Personajes
        </h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="border p-2 w-full mb-3 rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Filtro por casa */}
      <select
        className="border p-2 w-full mb-4 rounded"
        value={houseFilter}
        onChange={e => setHouseFilter(e.target.value)}
      >
        <option value="">Todas las casas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>

      {/* Lista de personajes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filtered.map((char, i) => (
        <div
            key={i}
            className="bg-[url('https://static4.depositphotos.com/1000401/289/v/450/depositphotos_2897034-stock-illustration-old-paper-or-parchment.jpg')] bg-cover bg-center bg-no-repeat text-gray-800 border-[3px] border-yellow-900 rounded-xl shadow-lg p-4 hover:scale-[1.01] transition-all"
        >
        <div className="flex items-center justify-center rounded-md h-48 mb-3 overflow-hidden">
            <img
                src={char.image || 'https://via.placeholder.com/150'}
                alt={char.name}
                className="max-h-full object-contain"
            />
        </div>
          <h2 className="font-bold text-xl text-yellow-900 font-harry mb-1">{char.name}</h2>
          <p className="text-sm text-gray-600 mb-1">{char.house || 'Sin casa'}</p>
    
          <div className="text-sm text-gray-700 mt-2 space-y-1">
            {char.dateOfBirth && <p><strong>Nacimiento:</strong> {char.dateOfBirth}</p>}
            {char.patronus && <p><strong>Patronus:</strong> {char.patronus}</p>}
            {char.ancestry && <p><strong>Linaje:</strong> {char.ancestry}</p>}
            {char.actor && <p><strong>Actor:</strong> {char.actor}</p>}
            {char.wand?.wood && (
              <p><strong>Varita:</strong> {char.wand.wood} / {char.wand.core} / {char.wand.length}″</p>
            )}
            <p><strong>Estado:</strong> {char.alive ? 'Vivo' : 'Fallecido'}</p>
          </div>
        
          <button className="mt-3 text-yellow-500 text-xl hover:text-yellow-600">
            ⭐
          </button>
        </div>
      ))}
    </div>

    </div>
  );
}

// Este componente muestra una lista de personajes de Harry Potter, permite buscar por nombre y filtrar por casa.
// Se utiliza la API de Harry Potter para obtener los datos de los personajes.
// Se utiliza el hook useEffect para hacer la llamada a la API y almacenar los datos en el estado.
// Se utiliza el hook useState para manejar el estado de los personajes, la búsqueda y el filtro por casa.
// Se utiliza axios para hacer la llamada a la API y obtener los datos de los personajes.

export default Characters;