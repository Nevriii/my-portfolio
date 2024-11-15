import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='container'>
      {/* Add your header content here */}
      <h1 className='roboto-bold'>Ervin Tejada</h1>
      <p className='roboto-bold'>Aspiring Software Engineer</p>
      <nav>
        <ul>
          <li><a href="#" className='roboto-bold'>About</a></li>
          <li><a href="#" className='roboto-bold'>Projects</a></li>
          <li><a href="#" className='roboto-bold'>Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;