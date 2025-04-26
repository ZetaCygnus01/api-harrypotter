import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Filters from './Filters';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('');

  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters')
      .then(res => setCharacters(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = characters.filter((char) => {
    const matchesName = char.name.toLowerCase().includes(search.toLowerCase());
    const matchesHouse = house ? char.house === house : true;
    return matchesName && matchesHouse;
  });

  return (
    <>
      <Filters search={search} setSearch={setSearch} house={house} setHouse={setHouse} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filtered.length ? (
          filtered.map((char, idx) => <CharacterCard key={idx} character={char} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No se encontraron personajes</p>
        )}
      </div>
    </>
  );
};

export default CharacterList;