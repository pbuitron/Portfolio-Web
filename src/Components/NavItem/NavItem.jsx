import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, className, ariaCurrent, children }) => {
  return (
    <li className="nav-item flex-items">
      <Link className={className} to={to} aria-current={ariaCurrent}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
