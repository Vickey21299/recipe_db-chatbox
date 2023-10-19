import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
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

  return (
    <nav className="headerStyles">
      <ul>
        <img src={require('./RecipeDBLogo.png')} alt="RecipeDB Logo" />
        <p>RecipeDB</p>
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
