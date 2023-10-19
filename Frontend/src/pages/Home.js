import React, { Component, useEffect, useState }  from 'react';
import './Home.css';
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; // this is a library for speech recognition which help in converting speech to text
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navigate } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
const Home = (props) =>{
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();
    const navigate = useNavigate(); // Get the navigate function
    
    const [userTranscript, setUserTranscipt]  = useState("")
    const [isDropDownExpanded, setDropDownExpanded] = useState("none")
    

    useEffect(()=>{
        setUserTranscipt(transcript)
    },[transcript])

    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    function handleChange(event){
        setUserTranscipt(event.target.value)
    }
    function changeDisplay(event){
        const parent = event.target
        if(parent.tagName=='A'){
            const div = (parent.getElementsByTagName("div"));
            if(isDropDownExpanded=="none"){
                setDropDownExpanded("block")
                div[0].style.display="block";
            }
            else{
                setDropDownExpanded("none")
                div[0].style.display="none";
            }
        }
    }
    function handleDropdownClick(text){ // this function is used to set the transcript to the text of the dropdown  
        setUserTranscipt(text)
    }


    function handleSubmit(event){
        console.log("user wants to say : ",userTranscript)
        if(userTranscript.trim().length > 0){
            navigate('/recipe-voice-bot/search_recipe')
            localStorage.setItem('userTranscript',userTranscript);
        }
        setUserTranscipt("")
        
    }

    function resetTranscript(){
        SpeechRecognition.stopListening()
        setUserTranscipt("");
    }

    return (
        <div>
            <Header></Header>
            <div className='main'>
                {/* <hr className='tophr' style={{width:'90%',marginTop:'2.5%',borderTop: '1px solid black'}}></hr> */}
                <p className='helpStyle'><span className='ask'></span> 
                <span>
                <a className='dropdown' id='a1' onClick={changeDisplay} style={{textDecoration:'None',color:''}}>&nbsp;&nbsp; &nbsp; &nbsp; Cuisine(Country) <FontAwesomeIcon onClick={changeDisplay} className='fa' icon={faCaretDown} ></FontAwesomeIcon><div class="dropdown-content">
                    <p>Examples:</p>
                    <p onClick={() => handleDropdownClick("Recommend some Indian dishes to cook.")}>Recommend some Indian dishes to cook.</p>
                    <p onClick={() => handleDropdownClick("I'm interested in trying out Lebanese cuisine, could you suggest some recipes?")}>I'm interested in trying out Lebanese cuisine, could you suggest some recipes?</p> 
                    <p onClick={() => handleDropdownClick("Can you recommend some Thai dishes to cook?")}>Can you recommend some Thai dishes to cook?</p>  
                    <p onClick={() => handleDropdownClick("I want to cook something with chicken, broccoli, and garlic")}>I want to cook something with chicken, broccoli, and garlic</p>
                    <p onClick={() => handleDropdownClick("I'm interested in trying out Lebanese cuisine, could you suggest some recipes?")}>I'm interested in trying out Lebanese cuisine, could you suggest some recipes?</p>
                </div></a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a2' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}> Ingredients <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                    <div class="dropdown-content2">
                    <p>Examples:</p>
                    <p onClick={() => handleDropdownClick("Recommend dishes with chicken, broccoli, and garlic for tonight's dinner")}>Recommend dishes with chicken, broccoli, and garlic for tonight's dinner</p>
                    <p onClick={()=> handleDropdownClick("Provide recipes that have wine as one the ingredients")}>Provide recipes that have wine as one the ingredients</p>
                    <p onClick={()=> handleDropdownClick("Show me some recipes that have chocolate as one of the ingredients")}>Show me some recipes that have chocolate as one of the ingredients</p>  
                    <p onClick={()=> handleDropdownClick("I want to cook something with chicken, broccoli, and garlic")}>I want to cook something with chicken, broccoli, and garlic</p>   
                    <p onClick={()=> handleDropdownClick("Show some recipe which can be make at home from sugar, milk, egg")}>Show some recipe which can be make at home from sugar, milk, egg</p> 
                </div>
                </a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a3' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}> Ingredient Category <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon> 
                    <div className='dropdown-content3'>
                        <p>Examples:</p>
                        <p onClick={() => handleDropdownClick("Show vegetable and fruit salad recipes for a healthy meal choice")}>Show vegetable and fruit salad recipes for a healthy meal choice</p>
                        <p onClick={() => handleDropdownClick("Show me some recipes which don't need a oven")}>Show me some recipes which don't need a oven</p>
                        <p onClick={() => handleDropdownClick("Suggest legume-based recipes for a nutritious and satisfying meal, please")}>Suggest legume-based recipes for a nutritious and satisfying meal, please</p>
                        <p onClick={() => handleDropdownClick("Show seafood recipes for a delectable ocean-inspired dining experience")}>Show seafood recipes for a delectable ocean-inspired dining experience</p>
                        <p onClick={() => handleDropdownClick("Recommend bakery-style recipes for mouthwatering homemade treats and sweets")}>Recommend bakery-style recipes for mouthwatering homemade treats and sweets</p>
                    </div>
                    </a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a4' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}> Cooking Process <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                    <div className='dropdown-content4'>
                        <p>Examples:</p>
                        <p onClick={() => handleDropdownClick("Suggest some recipes involving boiling.")}>Suggest some recipes involving boiling.</p>   
                        <p onClick={() => handleDropdownClick("Could you give dishes which involve seasoning with cilantro and lime")}>Could you give dishes which involve seasoning with cilantro and lime</p>
                        <p onClick={() => handleDropdownClick("Can you recommend some recipes which don't need refrigeration")}>Can you recommend some recipes which don't need refrigeration</p>
                        <p onClick={() => handleDropdownClick("Can you give me some recipes which require cooking in a microwave ?")}>Can you give me some recipes which require cooking in a microwave?</p>
                        <p onClick={() => handleDropdownClick("Show me some recipes which don't need a oven")}>Show me some recipes which don't need a oven</p>
  
                    </div>
                </a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a5' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}>  Utensils <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                    <div className='dropdown-content5'>
                        <p>Examples:</p>
                        <p onClick={() => handleDropdownClick("Show me some recipes which don't need a oven")}>Show me some recipes which don't need a oven</p>
                        <p onClick={() => handleDropdownClick("Recommend pot recipes for unique and delicious dishes")}>Recommend pot recipes for unique and delicious dishes</p>
                        <p onClick={() => handleDropdownClick("Can you recommend some recipes which don't need refrigeration")}>Can you recommend some recipes which don't need refrigeration</p>   
                        <p onClick={() => handleDropdownClick("Find saucepan recipes for making savory sauces and delicious pasta dishes")}>Find saucepan recipes for making savory sauces and delicious pasta dishes</p>   
                        <p onClick={() => handleDropdownClick("Could you give dishes which involve seasoning with cilantro and lime")}>Could you give dishes which involve seasoning with cilantro and lime</p>  
                    </div>
                    </a>
                </span>
                </p>
                {/* <hr style={{width:'90%',borderTop: '1px solid black'}}></hr> */}
                <button className='buttonstyle buttonmargin1' onClick={SpeechRecognition.startListening}>SPEAK</button> 
                
                 {/* here we have to change to convert the voice changer to whisper Ai changer  */}

                <button className='buttonstyle buttonmargin2' onClick={resetTranscript}>CLEAR</button>

                <h2 className='Right-margin'>{listening ? 'Listening...' : ''}</h2>
                
                <form onSubmit={handleSubmit} className='centerdiv'>
                    <label >
                    <textarea type="text" value={userTranscript} onChange={handleChange} placeholder="Click SPEAK Button to ask queries to RecipeDB..." className='textareastyle'/>
                    </label>
                </form>

                <button className='buttonstyle buttonmargin2' onClick={handleSubmit}>SUBMIT</button> 
            </div>
            <Footer></Footer>
       
        </div>
        
  );
  
    
}
export default Home;