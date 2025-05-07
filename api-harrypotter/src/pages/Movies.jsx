import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.potterdb.com/v1/movies')
      .then(response => response.json())
      .then(data => setMovies(data.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="container mx-auto p-8 text-[#E5C07B] font-serif">
      <h1 className="text-4xl mb-8 border-b-4 border-[#E5C07B] pb-2">Películas de Harry Potter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map(movie => {
          const attributes = movie.attributes;
          return (
            <div key={movie.id} className="bg-[#3C3A36] rounded-lg shadow-lg overflow-hidden">
              <img src={attributes.poster} alt={attributes.title} className="h-80 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{attributes.title}</h2>
                <p className="mb-1">Fecha de estreno: {attributes.release_date}</p>
                <p className="mb-3">Duración: {attributes.running_time} minutos</p>
                <p className="mb-4">{attributes.summary}</p>
                <div className="flex justify-between text-sm">
                  {attributes.trailer && (
                    <a href={attributes.trailer} target="_blank" rel="noopener noreferrer" className="underline">Ver tráiler</a>
                  )}
                  {attributes.wiki && (
                    <a href={attributes.wiki} target="_blank" rel="noopener noreferrer" className="underline">Wiki</a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
