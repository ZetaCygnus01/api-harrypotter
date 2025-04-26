import React from 'react';

const Filters = ({ search, setSearch, house, setHouse }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 justify-center items-center bg-white shadow">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <select
        value={house}
        onChange={(e) => setHouse(e.target.value)}
        className="border p-2 rounded w-64"
      >
        <option value="">Todas las casas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
  );
};

export default Filters;