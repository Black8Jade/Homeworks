import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import GamePage from '../pages/GamePage/GamePage';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;