import React, { useState } from 'react';
import './AddWordForm.scss';

const AddWordForm = ({ onAdd }) => {
  const [newWord, setNewWord] = useState({
    word: '',
    transcription: '',
    translation: '',
    theme: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWord({ ...newWord, [name]: value });
  };

  const isFormValid = Object.values(newWord).every(value => value.trim() !== '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    onAdd(newWord);
    setNewWord({ word: '', transcription: '', translation: '', theme: '' });
  };

  return (
    <form className="add-word-form" onSubmit={handleSubmit}>
      {Object.keys(newWord).map((key) => (
        <input
          key={key}
          name={key}
          value={newWord[key]}
          onChange={handleChange}
          placeholder={key}
          className={newWord[key].trim() === '' ? 'invalid' : ''}
        />
      ))}
      <button type="submit" disabled={!isFormValid}>Сохранить</button>
    </form>
  );
};

export default AddWordForm;
