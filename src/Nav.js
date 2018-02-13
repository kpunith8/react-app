import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <NavLink exact className="nav-link active" to='/' >
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className="nav-link active" to='/battle' >
          Battle
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className="nav-link active" to='/popular' >
          popular
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;