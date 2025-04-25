import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters')
      .then(res => setCharacters(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {characters.map((char, index) => (
        <div key={index} className="border p-4 rounded shadow-md bg-white">
          <img src={char.image} alt={char.name} className="w-full h-60 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{char.name}</h2>
          <p><strong>Casa:</strong> {char.house || 'Desconocida'}</p>
          <p><strong>Actor:</strong> {char.actor}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;