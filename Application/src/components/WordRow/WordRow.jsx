import React, { useState } from 'react';
import './WordRow.scss';

const WordRow = ({ word, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedWord({ ...editedWord, [name]: value });
  };

  const handleSave = () => {
    const isValid = Object.values(editedWord).every(field => field.trim() !== '');
    if (!isValid) return;
    onSave(editedWord);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedWord({ ...word });
    setIsEditing(false);
  };

  return (
    <tr className="word-row">
      {['word', 'transcription', 'translation', 'theme'].map((key) => (
        <td key={key}>
          {isEditing ? (
            <input
              name={key}
              value={editedWord[key]}
              onChange={handleChange}
              className={editedWord[key].trim() === '' ? 'invalid' : ''}
            />
          ) : (
            word[key]
          )}
        </td>
      ))}
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave} disabled={Object.values(editedWord).some(v => v.trim() === '')}>Сохранить</button>
            <button onClick={handleCancel}>Отмена</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Редактировать</button>
            <button onClick={() => onDelete(word.id)}>Удалить</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default WordRow;
