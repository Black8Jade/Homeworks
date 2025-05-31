import React, { useContext } from 'react';
import './MainPage.scss';
import WordTable from '../../components/WordTable/WordTable';
import AddWordForm from '../../components/AddWordForm/AddWordForm';
import { WordsContext } from '../../context/WordsContext';

const MainPage = () => {
  const { words, addWord, updateWord, deleteWord } = useContext(WordsContext);

  return (
    <main className="main-page">
      <h1>Список слов</h1>
      <AddWordForm onAdd={addWord} />
      <WordTable words={words} onUpdate={updateWord} onDelete={deleteWord} />
    </main>
  );
};

export default MainPage;
