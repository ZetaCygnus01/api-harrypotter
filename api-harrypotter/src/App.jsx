import React from 'react';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center p-6 bg-purple-900 text-white text-3xl font-bold">
        Personajes de Harry Potter 🧙‍♀️
      </header>
      <CharacterList />
    </div>
  );
}

export default App;