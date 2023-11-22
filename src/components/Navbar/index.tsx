import React from 'react';
import Logo from '../../assets/images/netflix-logo.svg';
import './styles.scss';

export default function Navbar() {
  return (
    <nav className="nav">
      <Logo className="nav__logo" />
      <button className="nav__btn" type="button">
        Sign In
      </button>
    </nav>
  );
}
