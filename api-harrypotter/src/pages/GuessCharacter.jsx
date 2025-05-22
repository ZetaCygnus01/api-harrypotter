// src/components/GuessCharacter.jsx
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const API_URL = 'https://hp-api.onrender.com/api/characters';

const GuessCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const filtered = res.data.filter((char) => char.name && char.house);
      setCharacters(filtered);
      generateQuestion(filtered);
    });
  }, []);

  const generateQuestion = (chars) => {
    const correct = chars[Math.floor(Math.random() * chars.length)];
    const options = [correct];

    while (options.length < 4) {
      const random = chars[Math.floor(Math.random() * chars.length)];
      if (!options.find((c) => c.name === random.name)) {
        options.push(random);
      }
    }

    const shuffled = options.sort(() => 0.5 - Math.random());

    setCurrentQuestion({ correct, options: shuffled });
    setShowResult(false);
    setIsCorrect(false);
  };

  const handleGuess = (name) => {
    const isRight = name === currentQuestion.correct.name;
    setIsCorrect(isRight);
    setShowResult(true);
  };

  if (!currentQuestion) return <p className="text-white text-center mt-10">Cargando...</p>;

  return (
    <Card className="max-w-xl mx-auto mt-10 p-6 bg-[#1e1e1e] text-white shadow-2xl rounded-2xl">
      <CardContent>
        {!showResult ? (
          <>
        <img
            src={currentQuestion.correct.image || 'URL_ALTERNATIVA'}
            alt="personaje"
            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
            <h2 className="text-xl font-bold mb-4">¿Quién es este personaje?</h2>
            <ul className="mb-4 space-y-1">
              <li><strong>Casa:</strong> {currentQuestion.correct.house || "Desconocida"}</li>
              <li><strong>Género:</strong> {currentQuestion.correct.gender}</li>
              <li><strong>Especie:</strong> {currentQuestion.correct.species}</li>
            </ul>
            <div className="space-y-2">
              {currentQuestion.options.map((opt, idx) => (
                <Button
                    key={idx}
                    className="w-full bg-[#4b2e83] hover:bg-[#6a409a]"
                    onClick={() => handleGuess(opt.name)}
                    disabled={showResult}
                >
                    {opt.name}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isCorrect ? '¡Correcto! 🎉' : `Incorrecto 😓 Era ${currentQuestion.correct.name}`}
            </h2>
            <Button className="bg-[#4b2e83] hover:bg-[#6a409a]" onClick={() => generateQuestion(characters)}>
              Siguiente
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GuessCharacter;
