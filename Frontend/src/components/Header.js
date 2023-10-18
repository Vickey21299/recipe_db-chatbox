import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleCoSyClick = () => {
    window.open('https://cosylab.iiitd.edu.in/');
  };

  const handleHomeClick = () => {
    navigate('/recipe-voice-bot'); // Use the navigate function to change the route
  };

  const handleContactClick = () => {
    navigate('/recipe-voice-bot/contact'); // Use the navigate function to change the route
  };

  function handleHamburger() {
    const element = document.querySelector('.main');
    if (element != null) {
      if (element.style.filter === 'blur(5px)') {
        element.style.filter = 'none';
      } else {
        element.style.filter = 'blur(5px)';
      }
    }
    const element2 = document.querySelector('.tablestyle');
    if (element2 != null) {
      if (element2.style.filter === 'blur(5px)') {
        element2.style.filter = 'none';
      } else {
        element2.style.filter = 'blur(5px)';
      }
    }
  }

  return (
    <nav className="headerStyles">
      <ul>
        <img src={require('./RecipeDBLogo.png')} alt="RecipeDB Logo" />
        <p>RecipeDB</p>
        <div className="button-like-link" onClick={handleHamburger}>
          <button className="button-icon">
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="navigation-menu horizontal-menu">
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={handleCoSyClick}>CoSyLab</li>
          <li onClick={handleContactClick}>Contact</li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
