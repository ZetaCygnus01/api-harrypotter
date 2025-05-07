import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://api.potterdb.com/v1/books')
      .then(response => response.json())
      .then(data => setBooks(data.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="container mx-auto p-8 text-[#E5C07B] font-serif">
      <h1 className="text-4xl mb-8 border-b-4 border-[#E5C07B] pb-2">Libros de Harry Potter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map(book => {
          const attributes = book.attributes;
          return (
            <div key={book.id} className="bg-[#3C3A36] border-2 border-[#E5C07B] rounded-lg shadow-lg overflow-hidden">
              <img src={attributes.cover} alt={attributes.title} className="h-80 object-contain mx-auto" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{attributes.title}</h2>
                <p className="mb-1">Autor: {attributes.author}</p>
                <p className="mb-1">Fecha de publicación: {attributes.release_date}</p>
                <p className="mb-3">Páginas: {attributes.pages}</p>
                <p className="mb-4">{attributes.summary}</p>
                <div className="flex justify-between text-sm">
                  {attributes.wiki && (
                    <a href={attributes.wiki} target="_blank" rel="noopener noreferrer" className="underline">Wiki</a>
                  )}
                  {attributes.purchase && (
                    <a href={attributes.purchase} target="_blank" rel="noopener noreferrer" className="underline">Comprar</a>
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

export default Books;
  