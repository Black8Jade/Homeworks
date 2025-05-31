import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWords = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
      setWords(response.data);
      setError(null);
    } catch (err) {
      setError('Ошибка загрузки данных');
    } finally {
      setLoading(false);
    }
  };

  const addWord = async (newWord) => {
    try {
      const response = await axios.post('http://itgirlschool.justmakeit.ru/api/words', newWord);
      setWords((prev) => [...prev, response.data]);
    } catch {
      setError('Ошибка при добавлении слова');
    }
  };

  const updateWord = async (updatedWord) => {
    try {
      await axios.put(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}`, updatedWord);
      setWords((prev) =>
        prev.map((word) => (word.id === updatedWord.id ? updatedWord : word))
      );
    } catch {
      setError('Ошибка при обновлении слова');
    }
  };

  const deleteWord = async (id) => {
    try {
      await axios.delete(`http://itgirlschool.justmakeit.ru/api/words/${id}`);
      setWords((prev) => prev.filter((word) => word.id !== id));
    } catch {
      setError('Ошибка при удалении слова');
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordsContext.Provider
      value={{
        words,
        loading,
        error,
        fetchWords,
        addWord,
        updateWord,
        deleteWord,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export const useWords = () => useContext(WordsContext);
