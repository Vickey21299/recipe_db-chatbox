import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';

const Home = (props) => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const navigate = useNavigate();

  const [userTranscript, setUserTranscipt] = useState('');
  const [isDropDownExpanded, setDropDownExpanded] = useState('none');

  useEffect(() => {
    setUserTranscipt(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function handleChange(event) {
    setUserTranscipt(event.target.value);
  }

  function changeDisplay(event) {
    const parent = event.target;
    if (parent.tagName === 'A') {
      const div = parent.getElementsByTagName('div');
      if (isDropDownExpanded === 'none') {
        setDropDownExpanded('block');
        div[0].style.display = 'block';
      } else {
        setDropDownExpanded('none');
        div[0].style.display = 'none';
      }
    }
  }

  function handleSubmit(event) {
    console.log('user wants to say : ', userTranscript);
    if (userTranscript.trim().length > 0) {
      navigate('/recipe-voice-bot/search_recipe');
      localStorage.setItem('userTranscript', userTranscript);
    }
    setUserTranscipt('');
  }

  function resetTranscript() {
    SpeechRecognition.stopListening();
    setUserTranscipt('');
  }

  return (
    <div>
      <Header></Header>
      <div className="main">
        <hr className="tophr" style={{ width: '90%', marginTop: '2.5%', borderTop: '1px solid black' }}></hr>
        <p className="helpStyle">
          <span className="ask">Ask for Recipes by</span>
          <span>
            <a className="dropdown" id="a1" onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>
              &nbsp;&nbsp; &nbsp; &nbsp; Cuisine(Country) <FontAwesomeIcon onClick={changeDisplay} className="fa" icon={faCaretDown}></FontAwesomeIcon>
              <div className="dropdown-content">
                <ul>
                  <li>Show me some Indian recipes</li>
                  <li>Could you suggest Thai recipes for me to prepare at home?</li>
                  <li>Show me some Belgian dishes involving Chocolate.</li>
                  <li>Give a list of some Australian recipes.</li>
                  <li>Can you suggest some recipes from the Middle Eastern?</li>
                </ul>
              </div>
            </a>
            &nbsp;&nbsp; &nbsp; &nbsp;
            <a className="dropdown" id="a2" onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>
              Ingredients <FontAwesomeIcon className="fa" icon={faCaretDown}></FontAwesomeIcon>
              <div className="dropdown-content2">
                <ul>
                  <li>Recommend dishes with chicken, broccoli, and garlic for tonight's dinner</li>
                  <li>Show me some French recipes involving Cheese</li>
                  <li>Provide Italian recipes that have wine as one the ingredients</li>
                  <li>Can you suggest some recipes with chocolate and milk?</li>
                  <li>Show me a high protein diet having almonds and eggs</li>
                  <li>Show some desserts to make at home from sugar, milk, egg</li>
                </ul>
              </div>
            </a>
            &nbsp;&nbsp; &nbsp; &nbsp;
            <a className="dropdown" id="a3" onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>
              Ingredient Category <FontAwesomeIcon className="fa" icon={faCaretDown}>
              </FontAwesomeIcon>
              <div className="dropdown-content3">
                <ul>
                  <li> Show vegetable and fruit salad recipes </li>
                  <li> Suggest legume-based recipes for a nutritious and satisfying meal, please</li>
                  <li> Show seafood recipes for a delectable ocean-inspired dining experience</li>
                  <li> Recommend bakery-style recipes for mouthwatering homemade treats and sweets</li>
                  <li> Suggest berry-infused recipes for a delightful and fruity dessert idea</li>
                </ul>
              </div>
            </a>
            &nbsp;&nbsp; &nbsp; &nbsp;
            <a className="dropdown" id="a4" onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>
              Cooking Process <FontAwesomeIcon className="fa" icon={faCaretDown}></FontAwesomeIcon>
              <div className="dropdown-content4">
                <ul>
                  <li>Can you give me some recipes which require cooking in a microwave?</li>
                  <li>Could you give dishes which involve seasoning with cilantro and lime.</li>
                  <li> Can you recommend some recipes which don't need refrigeration</li>
                  <li>Show me some recipes which require an oven.</li>
                  <li>Suggest some recipes involving boiling.</li>
                  <li>Find saucepan recipes for making savory sauces and delicious pasta dishes.</li>
                </ul>
              </div>
            </a>
            &nbsp;&nbsp; &nbsp; &nbsp;
            <a className="dropdown" id="a5" onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>
              Utensils <FontAwesomeIcon className="fa" icon={faCaretDown}></FontAwesomeIcon>
              <div className="dropdown-content5">
                <ul>
                  <li> Can you give me some recipes which require cooking in a microwave?</li>
                  <li>Show me some recipes which don't need an oven</li>
                  <li> Can you recommend some recipes which don't need refrigeration</li>
                  <li> Find saucepan recipes for making savory sauces and delicious pasta dishes.</li>
                  <li></li>
                  </ul>
              </div>
            </a>
          </span>
        </p>
        <hr style={{ width: '90%', borderTop: '1px solid black' }}></hr>
        <button className="buttonstyle buttonmargin1" onClick={SpeechRecognition.startListening}>
          SPEAK
        </button>
        <button className="buttonstyle buttonmargin1" onClick={resetTranscript}>
          CLEAR
        </button>
        <h2 className="left-margin">{listening ? 'Listening...' : ''}</h2>
        <form onSubmit={handleSubmit} className="centerdiv">
          <label>
            <textarea
              type="text"
              value={userTranscript}
              onChange={handleChange}
              placeholder="Click SPEAK Button to ask queries to RecipeDB..."
              className="textareastyle"
            />
          </label>
        </form>
        <button className="buttonstyle buttonmargin2" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
