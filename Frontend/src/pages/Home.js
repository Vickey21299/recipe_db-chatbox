import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useNavigate } from 'react-router-dom';
import logo from './RecipeDBLogoRed.png'
const Home = (props) => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();
    const navigate = useNavigate();
    const [userTranscript, setUserTranscipt] = useState("")
    const [isDropDownExpanded, setDropDownExpanded] = useState("none")

    useEffect(() => {
        setUserTranscipt(transcript)
    }, [transcript])

    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    function handleChange(event) {
        setUserTranscipt(event.target.value)
    }
    function changeDisplay(event) {
        const parent = event.target
        if (parent.tagName == 'A') {
            const div = (parent.getElementsByTagName("div"));
            if (isDropDownExpanded == "none") {
                setDropDownExpanded("block")
                div[0].style.display = "block";
            }
            else {
                setDropDownExpanded("none")
                div[0].style.display = "none";
            }
        }
    }

    function resetTranscript() {
        SpeechRecognition.stopListening()
        setUserTranscipt("");
    }

    const [selectedItem, setSelectedItem] = useState('');

    function handleSubmit(event) {
        console.log("user wants to say : ", userTranscript)
        if (userTranscript.trim().length > 0) {
            navigate('/recipe-voice-bot/search_recipe')
            localStorage.setItem('userTranscript', userTranscript);
        }
        setUserTranscipt("")

    }
    function handleDropdownClick(text) {
        // Check if the clicked item is already selected, then toggle the dropdown visibility
        if (selectedItem === text) {
            // setDropDownExpanded((prevState) => (prevState === "block" ? "none" : "block"));
        } else {
            setUserTranscipt(text); // Set the selected text to userTranscript
            setDropDownExpanded("block"); // Expand the dropdown
            setSelectedItem(text); // Set the selected item
        }
    }

    return (
        <div>
            <Header></Header>
            <div className='main'>
                {/* <hr className='tophr' style={{width:'90%',marginTop:'2.5%',borderTop: '1px solid black'}}></hr> */}
                <p className='helpStyle'><span className='ask'>Search for Recipes by</span>
                    <span>
                        <a className='dropdown' id='a1' onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>
                            &nbsp;&nbsp; &nbsp; &nbsp; Cuisine(Country) <FontAwesomeIcon onClick={changeDisplay} className='fa' icon={faCaretDown}></FontAwesomeIcon>
                            <div className="dropdown-content">
                            <p className={selectedItem === "Show me Indian recipes." ? "selected" : ""} onClick={() => handleDropdownClick("Show me Indian recipes.")}>Show me Indian recipes.</p>
                            <p className={selectedItem === "Could you suggest Thai recipes for me to prepare at home?" ? "selected" : ""} onClick={() => handleDropdownClick("Could you suggest Thai recipes for me to prepare at home?")}> Could you suggest Thai recipes for me to prepare at home?</p>
                            <p className={selectedItem === "Recommend some indigenous Korean recipes" ? "selected" : ""} onClick={() => handleDropdownClick("Recommend some indigenous Korean recipes")}>Recommend some indigenous Korean recipes</p>
                            <p className={selectedItem === "Give a list of some Australian recipes" ? "selected" : ""} onClick={() => handleDropdownClick("Give a list of some Australian recipes")}>Give a list of some Australian recipes</p>
                            
                            <p className={selectedItem === "Show me some Belgian dishes involving Chocolate." ? "selected" : ""} onClick={() => handleDropdownClick("Show me some Belgian dishes involving Chocolate.")}>Show me some Belgian dishes involving Chocolate.</p>
                        </div>
                        </a>
                        &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a2' onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}> Ingredients <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                            <div className="dropdown-content2">
                                <p className={selectedItem === "Recommend dishes with chicken, broccoli, and garlic for tonight's dinner." ? "selected" : ""} onClick={() => handleDropdownClick("Recommend dishes with chicken, broccoli, and garlic for tonight's dinner.")}>Recommend dishes with chicken, broccoli, and garlic for tonight's dinner.</p>
                                <p className={selectedItem === "Show me some French recipes involving Cheese" ? "selected" : ""} onClick={() => handleDropdownClick("Show me some French recipes involving Cheese")}>Show me some French recipes involving Cheese</p>
                                <p className={selectedItem === "Provide Italian recipes that have wine as one the ingredients" ? "selected" : ""} onClick={() => handleDropdownClick("Provide Italian recipes that have wine as one the ingredients")}>Provide Italian recipes that have wine as one the ingredients</p>
                                <p className={selectedItem === "Show me a diet having almonds and eggs" ? "selected" : ""} onClick={() => handleDropdownClick("Show me a diet having almonds and eggs")}>Show me a diet having almonds and eggs</p>
                                <p className={selectedItem === "Show some desserts to make at home from sugar, milk, egg" ? "selected" : ""} onClick={() => handleDropdownClick("Show some desserts to make at home from sugar, milk, egg")}>Show some desserts to make at home from sugar, milk, egg</p>
                                {/* Add more items for this dropdown as needed */}
                            </div>
                        </a>
                        &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a3' onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}> Ingredient Category <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                            <div className="dropdown-content3">
                                <p className={selectedItem === "Show vegetable and fruit salad recipes for a healthy meal choice." ? "selected" : ""} onClick={() => handleDropdownClick("Show vegetable and fruit salad recipes for a healthy meal choice.")}>Show vegetable and fruit salad recipes for a healthy meal choice.</p>
                                <p className={selectedItem === "Suggest legume-based recipes for a nutritious and satisfying meal, please" ? "selected" : ""} onClick={() => handleDropdownClick("Suggest legume-based recipes for a nutritious and satisfying meal, please")}>Suggest legume-based recipes for a nutritious and satisfying meal, please</p>
                                <p className={selectedItem === "Show seafood recipes for a delectable ocean-inspired dining experience." ? "selected" : ""} onClick={() => handleDropdownClick("Show seafood recipes for a delectable ocean-inspired dining experience.")}>Show seafood recipes for a delectable ocean-inspired dining experience.</p>
                                <p className={selectedItem === "Recommend bakery-style recipes." ? "selected" : ""} onClick={() => handleDropdownClick("Recommend bakery-style recipes.")}>Recommend bakery-style recipes.</p>
                                <p className={selectedItem === "Suggest berry-infused recipes." ? "selected" : ""} onClick={() => handleDropdownClick("Suggest berry-infused recipes.")}>Suggest berry-infused recipes.</p>
                                {/* Add more items for this dropdown as needed */}
                            </div>

                        </a>
                        &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a4' onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}> Cooking Process <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                            <div className="dropdown-content4">
                                <p className={selectedItem === "Can you recommend some dishes for lunch which do not require refrigeration." ? "selected" : ""} onClick={() => handleDropdownClick("Can you recommend some dishes for lunch which do not require refrigeration.")}>Can you recommend some dishes for lunch which do not require refrigeration.</p>
                                <p className={selectedItem === "Show me recipes using drain method" ? "selected" : ""} onClick={() => handleDropdownClick("Show me recipes using drain method")}>Show me recipes using drain method</p>
                                <p className={selectedItem === "Could you give dishes which involve seasoning with cilantro and lime" ? "selected" : ""} onClick={() => handleDropdownClick("Could you give dishes which involve seasoning with cilantro and lime")}>Could you give dishes which involve seasoning with cilantro and lime</p>
                                {/* Add more items for this dropdown as needed */}
                            </div>

                        </a>

                        &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a5' onClick={changeDisplay} style={{ textDecoration: 'None', color: 'black' }}>  Utensils <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                            <div className="dropdown-content5">
                                <p className={selectedItem === "Can you give me some recipes which require cooking in a microwave?" ? "selected" : ""} onClick={() => handleDropdownClick("Can you give me some recipes which require cooking in a microwave?")}>Can you give me some recipes which require cooking in a microwave?</p>
                                <p className={selectedItem === "Show me some recipes which don't need a oven" ? "selected" : ""} onClick={() => handleDropdownClick("Show me some recipes which don't need a oven")}>Show me some recipes which don't need a oven</p>
                                <p className={selectedItem === "Can you recommend some recipes which don't need refrigeration" ? "selected" : ""} onClick={() => handleDropdownClick("Can you recommend some recipes which don't need refrigeration")}>Can you recommend some recipes which don't need refrigeration</p>
                                {/* Add more items for this dropdown as needed */}
                            </div>

                        </a>
                    </span>
                </p>
                <div className="image-and-text-container">
                    <img
                    src={logo}
                    alt="Your Image"
                    className="custom-image"
                    />
                    <p className="custom-title">
                    <h2>Voice ChatBot</h2>
                    </p>
                    </div>
                <h2 className='left-margin'>{listening ? 'Listening...' : ''}</h2>
                <form onSubmit={handleSubmit} className='centerdiv'>
                    <label >
                        <textarea type="text" value={userTranscript} onChange={handleChange}  onKeyPress={(event) => {if (event.key === 'Enter'){handleSubmit(event);}}} placeholder="Click SPEAK Button to ask queries to RecipeDB..."  className='textarea' />
                    </label>
                </form> 
                <button className='buttonstyle buttonmargin' onClick={SpeechRecognition.startListening}>SPEAK</button>
                <button className='buttonstyle buttonmargin1' onClick={resetTranscript}>CLEAR</button>
                <button className='buttonstyle buttonmargin2' onClick={handleSubmit} >SUBMIT</button>

            </div>
            <Footer></Footer>

        </div>

    );


}
export default Home;