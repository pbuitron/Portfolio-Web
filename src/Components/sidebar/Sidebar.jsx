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

export default Sidebar;
