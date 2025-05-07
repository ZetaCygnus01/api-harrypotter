import React, { useState, useEffect } from "react";

const houseImages = {
  Gryffindor: "https://www.pngarts.com/files/11/Harry-Potter-Gryffindor-Logo-PNG-Photo.png",
  Slytherin: "https://upload.wikimedia.org/wikipedia/commons/3/34/Slytherin.png",
  Ravenclaw: "https://static.wikia.nocookie.net/jspotter/images/e/e6/Ravenclaw_Crest_Painting.png/revision/latest/scale-to-width-down/273?cb=20140721054550",
  Hufflepuff: "https://static.wikia.nocookie.net/esharrypotter/images/3/30/Logo_Hufflepuff_2.png/revision/latest/scale-to-width-down/250?cb=20160417160852",
};

const houseColors = {
    Gryffindor: "bg-gradient-to-br from-red-700 to-yellow-500 text-white",
    Slytherin: "bg-gradient-to-br from-green-700 to-gray-300 text-white",
    Ravenclaw: "bg-gradient-to-br from-blue-800 to-gray-400 text-white",
    Hufflepuff: "bg-gradient-to-br from-yellow-600 to-black text-white",
  };

const houseDetails = {
  Gryffindor: {
    fundador: "Godric Gryffindor",
    animal: "León",
    colores: "Escarlata y dorado",
    descripcion:
      "Gryffindor valora el coraje, la valentía y la determinación. Su fundador, Godric Gryffindor, era conocido por su valentía y su fuerte sentido del bien y el mal.",
  },
  Slytherin: {
    fundador: "Salazar Slytherin",
    animal: "Serpiente",
    colores: "Verde y plata",
    descripcion:
      "Slytherin valora la astucia, la ambición y la determinación. Es conocida por producir magos talentosos, aunque algunos se han desviado al lado oscuro.",
  },
  Ravenclaw: {
    fundador: "Rowena Ravenclaw",
    animal: "Águila",
    colores: "Azul y bronce",
    descripcion:
      "Ravenclaw valora la sabiduría, la creatividad y el aprendizaje. Sus miembros tienden a ser intelectuales y estudiosos.",
  },
  Hufflepuff: {
    fundador: "Helga Hufflepuff",
    animal: "Tejón",
    colores: "Amarillo y negro",
    descripcion:
      "Hufflepuff valora la lealtad, la paciencia y el trabajo duro. Es la casa más inclusiva y acepta a todos por igual.",
  },
};

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    setHouses(["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]);
  }, []);

  return (
    <div className="min-h-screen bg-[url('https://images3.alphacoders.com/107/1076342.jpg')] bg-cover bg-center text-white p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        🏰 Casas de Hogwarts
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
        {houses.map((house) => (
          <div
            key={house}
            className="bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-xl p-4 shadow-lg text-center cursor-pointer transition-all"
            onClick={() => setSelectedHouse(house)}
          >
            <img
              src={houseImages[house]}
              alt={`Escudo de ${house}`}
              className="w-24 h-24 mx-auto mb-2 object-contain"
            />
            <h2 className="text-xl font-bold text-white">{house}</h2>
          </div>
        ))}
      </div>

      {selectedHouse && (
          <div
          className={`mt-10 rounded-xl p-6 shadow-xl max-w-2xl mx-auto transition-all duration-300 ${
            houseColors[selectedHouse]
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#740001]">{selectedHouse}</h2>
          <img
            src={houseImages[selectedHouse]}
            alt={`Escudo de ${selectedHouse}`}
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
          <p><strong>Fundador:</strong> {houseDetails[selectedHouse].fundador}</p>
          <p><strong>Animal:</strong> {houseDetails[selectedHouse].animal}</p>
          <p><strong>Colores:</strong> {houseDetails[selectedHouse].colores}</p>
          <p className="mt-4 italic">{houseDetails[selectedHouse].descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default Houses;
