import React, { Component, useEffect, useState }  from 'react';
import './Home.css';
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Home = (props) =>{
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();
    
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


    function handleSubmit(event){
        console.log("user wants to say : ",userTranscript)
        if(userTranscript.trim().length > 0){
            window.open('/recipe-voice-bot/search_recipe')
            localStorage.setItem('userTranscript',userTranscript);
        }
        setUserTranscipt("")
        
    }

    function resetTranscript(){
        SpeechRecognition.stopListening()
        setUserTranscipt("");
    }

    return (
        // <div>
        //     <Header></Header>
        //     <div>
        //         {/* <img className = 'img_dat'>acac</img> */}
        //         <div class="fact-box">
        //             <h2>RecipeDB is a well-organized collection of recipes and ingredients sourced from more than 22 global regions. Its primary aim is to enable systematic and data-oriented investigations of various recipes. By incorporating flavor molecules information from FlavorDB, RecipeDB allows for in-depth examination of traditional recipes at different levels, such as dietary classifications, ingredient compositions, nutritional value, and cooking methods.</h2>
        //             <p class="fact"></p>
        //         </div>

        //         <button className='buttonstyle buttonmargin1' onClick={SpeechRecognition.startListening}>SPEAK</button>
        //         <button className='buttonstyle buttonmargin1' onClick={resetTranscript}>CLEAR</button>

        //         <h2 className='left-margin'>{listening ? 'Listening...' : ''}</h2>
                
        //         <form onSubmit={handleSubmit} className='centerdiv'>
        //             <label >
        //             <textarea type="text" value={userTranscript} onChange={handleChange} placeholder="Click SPEAK Button to speak something...
        //             ask for Recipes by Cuisine(Country), Ingredients(its Category), Cooking Process and Utensils" className='textareastyle'/>
        //             </label>
        //         </form>

        //         <button className='buttonstyle buttonmargin2' onClick={handleSubmit}>SUBMIT</button> 
        //     </div>
       
        // </div>
        <div>
            <Header></Header>
            <div className='main'>
                <hr className='tophr' style={{width:'90%',marginTop:'2.5%',borderTop: '1px solid black'}}></hr>
                <p className='helpStyle'><span className='ask'>Ask for Recipes by</span> 
                <span>
                <a className='dropdown' id='a1' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}>&nbsp;&nbsp; &nbsp; &nbsp; Cuisine(Country) <FontAwesomeIcon onClick={changeDisplay} className='fa' icon={faCaretDown} ></FontAwesomeIcon><div class="dropdown-content">
                    <p>Examples:</p>
                    <p>Show me some Egyptian recipes</p>
                    <p>Can you recommend some Thai dishes to cook?</p>
                    <p>I'm interested in trying out Lebanese cuisine, could you suggest some recipes?</p>
                </div></a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a2' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}> Ingredients <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                    <div class="dropdown-content2">
                    <p>Examples:</p>
                    <p>Show me some recipes having handfuls fusilli</p>
                    <p>Can you suggest recipes that use bacon?</p>
                    <p>I'd like to try cooking with almond, can you show me some recipes?</p>
                </div>
                </a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a3' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}> Ingredient Category <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon> 
                    <div className='dropdown-content3'>
                        <p>Examples:</p>
                        <p>Can you give me some recipes which require cooking in a microwave?</p>
                        <p>Show me some recipes which don't need a oven</p>
                        <p>Can you recommend some recipes which don't need refrigeration</p>
                    </div>
                    </a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a4' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}> Cooking Process <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon></a>
                &nbsp;&nbsp; &nbsp; &nbsp;<a className='dropdown' id='a5' onClick={changeDisplay} style={{textDecoration:'None',color:'black'}}>  Utensils <FontAwesomeIcon className='fa' icon={faCaretDown} ></FontAwesomeIcon>
                    <div className='dropdown-content5'>
                        <p>Examples:</p>
                        <p>Can you give me some recipes which require cooking in a microwave?</p>
                        <p>Show me some recipes which don't need a oven</p>
                        <p>Can you recommend some recipes which don't need refrigeration</p>
                    </div>
                    </a>
                </span>
                </p>
                <hr style={{width:'90%',borderTop: '1px solid black'}}></hr>
                <button className='buttonstyle buttonmargin1' onClick={SpeechRecognition.startListening}>SPEAK</button>
                <button className='buttonstyle buttonmargin1' onClick={resetTranscript}>CLEAR</button>

                <h2 className='left-margin'>{listening ? 'Listening...' : ''}</h2>
                
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