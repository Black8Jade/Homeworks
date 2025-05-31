// /store/WordsStore.js
import { makeAutoObservable, runInAction } from 'mobx';

class WordsStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchWords = async () => {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      if (!response.ok) throw new Error('Ошибка загрузки данных');
      const data = await response.json();
      runInAction(() => {
        this.words = data;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  addWord = async (word) => {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(word),
      });
      if (!response.ok) throw new Error('Ошибка добавления слова');
      const newWord = await response.json();
      runInAction(() => {
        this.words.push(newWord);
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  updateWord = async (word) => {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(word),
      });
      if (!response.ok) throw new Error('Ошибка обновления слова');
      const updatedWord = await response.json();
      runInAction(() => {
        const index = this.words.findIndex(w => w.id === updatedWord.id);
        if (index !== -1) this.words[index] = updatedWord;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  deleteWord = async (id) => {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Ошибка удаления слова');
      runInAction(() => {
        this.words = this.words.filter(w => w.id !== id);
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };
}

export default new WordsStore();
