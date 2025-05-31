import React, { useState } from 'react';
import WordRow from '../WordRow/WordRow';
import AddWordForm from '../AddWordForm/AddWordForm';
import './WordTable.scss';

const WordTable = ({ words, onAdd, onEdit, onDelete }) => {
  return (
    <section className="word-table">
      <AddWordForm onAdd={onAdd} />
      <table className="word-table__table">
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Тема</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordRow key={word.id} word={word} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WordTable;