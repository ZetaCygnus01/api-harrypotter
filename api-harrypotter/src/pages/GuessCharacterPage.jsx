// En GuessCharacterPage.jsx (nueva página)
import React from 'react';
import GuessCharacter from './GuessCharacter';

const GuessCharacterPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🎭 Adivina el personaje</h1>
      <GuessCharacter />
    </div>
  );
};

export default GuessCharacterPage;