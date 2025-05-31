import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink exact="true" to="/" className="menu__link" activeclassname="menu__link--active">
        Главная
      </NavLink>
      <NavLink to="/game" className="menu__link" activeclassname="menu__link--active">
        Карточки
      </NavLink>
    </nav>
  );
};

export default Menu;
