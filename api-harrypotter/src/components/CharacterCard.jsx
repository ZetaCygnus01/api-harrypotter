import React from 'react';

const CharacterCard = ({ character }) => (
  <div className="border p-4 rounded shadow-md bg-white">
    <img src={character.image || 'https://via.placeholder.com/150'} alt={character.name} className="w-full h-60 object-cover rounded" />
    <h2 className="text-xl font-bold mt-2">{character.name}</h2>
    <p><strong>Casa:</strong> {character.house || 'Desconocida'}</p>
    <p><strong>Actor:</strong> {character.actor || 'N/D'}</p>
  </div>
);

export default CharacterCard;