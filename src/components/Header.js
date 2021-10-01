import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from "react-icons/im";

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <header>
      <div className="header-left">
        <h2 className="navbar-title">Bookstore ASD</h2>
        <nav className="navigation">

          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <ImUser />
      </div>
    </header>
  );
};
export default Header;
