import React, { useState, useEffect, useRef } from 'react';
import './WordCard.scss';

const WordCard = ({ wordData, onShowTranslation }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setShowTranslation(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [wordData]);

  const handleShowTranslation = () => {
    setShowTranslation(true);
    if (onShowTranslation) {
      onShowTranslation();
    }
  };

  return (
    <div className="word-card">
      <div className="word">{wordData.word}</div>
      <div className="transcription">{wordData.transcription}</div>
      <div className="theme">{wordData.theme}</div>
      {showTranslation ? (
        <div className="translation">{wordData.translation}</div>
      ) : (
        <button ref={buttonRef} onClick={handleShowTranslation}>Показать перевод</button>
      )}
    </div>
  );
};

export default WordCard;
