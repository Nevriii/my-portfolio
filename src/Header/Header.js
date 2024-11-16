import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => {
        setIsMenuVisible(true);
      }, 1000); // Delay for bubble animation
    } else {
      setIsMenuVisible(false);
      setTimeout(() => {
        setIsExpanded(false);
      }, 300); // Delay for menu disappearance
    }
  };

  return (
    <header className="container">
      <div className={`bubble-background ${isExpanded ? 'expanded' : ''}`}></div> {/* Bubble background */}
      <div className={`toggle-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleMenu}>
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className={`bi bi-list ${isExpanded ? 'hidden' : ''}`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className={`bi bi-x ${isExpanded ? '' : 'hidden'}`}
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      <nav className={`${isMenuVisible ? 'expanded' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;