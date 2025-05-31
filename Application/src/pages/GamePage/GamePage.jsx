import React, { useContext } from 'react';
import './GamePage.scss';
import CardsTrainer from '../../components/CardsTrainer/CardsTrainer';
import { WordsContext } from '../../context/WordsContext';

const GamePage = () => {
  const { words } = useContext(WordsContext);

  return (
    <main className="game-page">
      <h1>Тренировка слов</h1>
      <CardsTrainer words={words} />
    </main>
  );
};

export default GamePage;