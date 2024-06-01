/*
import React from 'react';
import { useTranslation } from 'react-i18next';
import NavItem from '../NavItem/NavItem'; // Asegúrate de que la ruta sea correcta
import './Sidebar.css';

const Sidebar = () => {
  const { t } = useTranslation('global');

  const navItems = [
    { text: 'nav.home', to: '/', className: 'nav-link', ariaCurrent: 'page' },
    { text: 'nav.info', to: '/tecnologias', className: 'nav-link' },
    { text: 'nav.projects', to: '/projects', className: 'nav-link' },
    { text: 'nav.contact', to: '/contact', className: 'nav-link' },
  ];

  return (
    <ul className="nav flex-column left">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          to={item.to}
          className={item.className}
          ariaCurrent={item.ariaCurrent}
        >
          {t(item.text)}
        </NavItem>
      ))}
    </ul>
  );
};

export default Sidebar; */
/*

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const { t } = useTranslation('global');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [nextPath, setNextPath] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { text: 'nav.home', to: '/', className: 'nav-link', ariaCurrent: 'page' },
    { text: 'nav.info', to: '/tecnologias', className: 'nav-link' },
    { text: 'nav.projects', to: '/projects', className: 'nav-link' },
    { text: 'nav.contact', to: '/contact', className: 'nav-link' },
  ];

  const handleNavigation = (to) => {
    setIsFadingOut(true);
    setNextPath(to);
  };

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      navigate(nextPath);
      setIsFadingOut(false);  // Reset the state to allow for subsequent navigations
    }
  };

  return (
    <ul
      className={`nav flex-column left ${isFadingOut ? 'fadeOut' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {navItems.map((item, index) => (
        <li key={index} className="nav-item">
          <NavLink
            to={item.to}
            className={item.className}
            aria-current={item.ariaCurrent}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.to);
            }}
          >
            {t(item.text)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;*/

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const { t } = useTranslation('global');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [nextPath, setNextPath] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { text: 'nav.home', to: '/', className: 'nav-link', ariaCurrent: 'page' },
    { text: 'nav.info', to: '/tecnologias', className: 'nav-link' },
    { text: 'nav.projects', to: '/projects', className: 'nav-link' },
    { text: 'nav.contact', to: '/contact', className: 'nav-link' },
  ];

  const handleNavigation = (to) => {
    if (location.pathname !== to) {
      setIsFadingOut(true);
      setNextPath(to);
    } else {
      navigate(to); // Directly navigate without animation
    }
  };

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      navigate(nextPath);
      setIsFadingOut(false);
    }
  };

  return (
    <ul
      className={`nav flex-column left ${isFadingOut ? 'fadeOut' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {navItems.map((item, index) => (
        <li key={index} className="nav-item">
          <NavLink
            to={item.to}
            className={item.className}
            aria-current={item.ariaCurrent}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.to);
            }}
          >
            {t(item.text)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
