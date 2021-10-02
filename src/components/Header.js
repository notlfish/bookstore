import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

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
      <div className="header-left f-center">
        <h2 className="navbar-title bold">Bookstore ASD</h2>
        <nav className="navigation f-center">
          <ul className="navigation f-center uppercase">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} className="dim-text" activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-right f-center">
        <ImUser />
      </div>
    </header>
  );
};
export default Header;
