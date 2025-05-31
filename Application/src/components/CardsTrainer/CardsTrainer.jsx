import React, { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import './CardsTrainer.scss';

const CardsTrainer = ({ words = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);

  const handleShowTranslation = () => {
    setLearnedCount(prev => prev + 1);
  };

  const showNextCard = () => {
    setCurrentIndex((prev) => (prev + 1 < words.length ? prev + 1 : 0));
  };

  const showPrevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  if (!words.length) {
    return <div className="cards-trainer__empty">Нет слов для тренировки</div>;
  }

  return (
    <div className="cards-trainer">
      <div className="cards-trainer__controls">
        <button onClick={showPrevCard}>&larr;</button>
        <WordCard wordData={words[currentIndex]} onShowTranslation={handleShowTranslation} />
        <button onClick={showNextCard}>&rarr;</button>
      </div>
      <div className="cards-trainer__info">
        Изучено слов: {learnedCount}
      </div>
    </div>
  );
};

export default CardsTrainer;
