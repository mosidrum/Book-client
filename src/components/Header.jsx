import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { paths } from '../routes/paths';
import logo from '../assets/book-open.svg';

const Header = () => {
  return (
    <header>
      <Link to={paths.index} className='logo'>
        <img src={logo} alt='ReactJs' />BookShop
      </Link>
      <nav>
        <NavLink to={paths.index}>Home</NavLink>
        <NavLink to={paths.books}>Books</NavLink>
        <NavLink to={paths.about}>About</NavLink>
      </nav>
    </header>
  )
}

export default Header