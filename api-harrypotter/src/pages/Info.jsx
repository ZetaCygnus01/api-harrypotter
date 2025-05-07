import React from 'react';

const Info = () => {
  return (
    <div className="container mx-auto p-8 text-[#E5C07B] font-serif">
      <h1 className="text-4xl mb-8 border-b-4 border-[#E5C07B] pb-2">Acerca del Proyecto</h1>
      <div className="bg-[#3C3A36] border-2 border-[#E5C07B] rounded-lg shadow-lg p-6 mb-6 flex flex-col items-center">
        <img src="https://i.pinimg.com/736x/00/3a/81/003a811cacb2871bb80a9d467d1749cb.jpg" alt="Foto del autor" className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h2 className="text-3xl font-bold mb-4">Autor</h2>
        <h3 className="text-3xl font-bold mb-4">Santiago Contreras</h3>
        <p className="mb-2">Este proyecto fue creado por ZetaCygnus01 como parte de una aplicación React dedicada al universo de Harry Potter.</p>
        <p className="mb-2">El objetivo principal es ofrecer una experiencia visual atractiva y organizada para los fanáticos del mundo mágico, utilizando recursos de la API pública de Harry Potter.</p>
      </div>
      <div className="bg-[#3C3A36] border-2 border-[#E5C07B] rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4">Conclusión sobre la API</h2>
        <p>La API de Harry Potter utilizada en este proyecto ofrece una fuente completa y actualizada de datos sobre personajes, libros, películas y más. Su creación responde a la necesidad de centralizar la información del universo mágico, brindando acceso a desarrolladores y entusiastas para crear aplicaciones innovadoras y educativas.</p>
      </div>
    </div>
  );
};

export default Info;
