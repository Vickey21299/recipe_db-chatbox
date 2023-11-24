import React, { Component, useEffect, useState, useTransition }  from 'react';
import {useParams} from "react-router-dom"
import axios from 'axios'
import {  ColorRing } from 'react-loader-spinner'
import './RecipeInfo.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';
const RecipeList = (props)  => {
    //const {recipe_id} = useParams();
    const recipe_id = localStorage.getItem('id');
    const userTranscript = localStorage.getItem('userTranscript');
    const [instructionInfo, setInstructionInfo] = useState(null);
    const [recipeInfo, setRecipeInfo] = useState(null)
    const [ingridientInfo,setIngridientInfo] = useState(null);
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition() ;
    const navigate = useNavigate();
    const [user1Transcript, setUser1Transcipt] = useState("")
    useEffect(() => {
        setUser1Transcipt(transcript)
    }, [transcript])

    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    function handleChange(event) {
        setUser1Transcipt(event.target.value)
    }
    function resetTranscript() {
        SpeechRecognition.stopListening()
        setUser1Transcipt("");
    }

    function handleSubmit(event) {
        console.log("user wants to say : ", user1Transcript)
        if (user1Transcript.trim().length > 0) {
            navigate('/recipe-voice-bot/search_recipe')
            localStorage.setItem('userTranscript', user1Transcript);
        }
        setUser1Transcipt("")

    }


    useEffect(()=>{
            axios({
                method :"GET",
                url : `https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/recipeDB/getingredientsbyrecipe/` + recipe_id
                
              }).then(res=>{
                console.log('data by geting',Object.values(res.data).length);
                var lst = []
                var len = Object.values(res.data).length;
                var i = 0;
                while(i<len){
                    var d1 = res.data[i]["ingredient_Phrase"];
                    var d2 = "";
                    i+=1;
                    if(i<len){
                        d2 = res.data[i]["ingredient_Phrase"];
                        i+=1;
                    }
                    lst.push({ing1:d1,ing2:d2});
                }
                setIngridientInfo(lst);
                console.log('lst data',lst,'len: ',len);
                
          }).catch(err=>{
            console.log('error got while getting indridents',err);
          })
    },[recipe_id])

    useEffect(()=>{
        axios({
            method :"GET",
            url : `https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/recipeDB/recipeInfo/` + recipe_id
            
          }).then(res=>{
            console.log('data by recipeInfo',res.data);
            setRecipeInfo(res.data);
      }).catch(err=>{
        console.log('error got while getting recipeInfo',err);
      })
  },[recipe_id])

  useEffect(()=>{
    axios({
        method :"GET",
        url : `https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/recipeDB/instructions/` + recipe_id
        
      }).then(res=>{
       
        var lst = []
        var cnt = 1;
        res.data.forEach((ele)=> {
            if(ele.trim() !='.' && ele.trim() !=""){
                lst.push({"id":cnt,"name":ele})
                cnt+=1;
            }
          });
        setInstructionInfo(lst);
        console.log('data by instuction',lst);

  }).catch(err=>{
    console.log('error got while getting instuctions',err);
  })
},[recipe_id])

    const response = (ingridientInfo === null || recipeInfo === null || instructionInfo === null) ?
    (
        <div>
            <br></br>
            <div className = "marginForSpinner">
                    <ColorRing
                    colors={['#309D66','#309D66','#309D66','#309D66','#309D66']}
                    />
            </div>

        </div>
        
    ):(
        <div>
            <h2 className='recipeName'> {recipeInfo.recipe_title}</h2>
            <hr style={{width:'90%'}}></hr>
            <div className='recipeInfo'>
                <table  style={{margin:'4rem'}} >
                <tr>
                    <td> <img src = { (recipeInfo.img_url === "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png" || recipeInfo.img_url==='https://images.media-allrecipes.com/images/79591.png')  ?  "https://cosylab.iiitd.edu.in/recipedb/static/recipe_temp.jpg" : recipeInfo.img_url} className='recipeImage'></img></td>
                    <td>
                        <div className='recipeLocation'>
                        <p className='cuisine'>Cuisine: </p>
                        <p>{recipeInfo.continent}{" >> "}{recipeInfo.region}{" >> "}{recipeInfo.sub_region}</p>
                        {recipeInfo.cook_time > 0 ? 
                        <>
                            <p className='cuisine'>Preperation Time: </p>
                            <p>Cooking Time - {recipeInfo.cook_time} minutes, Preperation Time - {recipeInfo.cook_time} minutes</p>
                        </>
                        :""}
                        </div>
                    </td>
                </tr>
                </table>
               
                
            </div>
            <hr style={{width:'90%'}}></hr>
            <div>
                <h2 className='header2'>Ingredients</h2>
                <table  className='tablestyleIng ' >
                    <tbody >
                        {ingridientInfo.map((data) => {
                            return (
                            <tr>
                                <td className='equalWidth'>{data.ing1}</td>
                                <td className='equalWidth'>{data.ing2}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <hr style={{width:'90%'}}></hr>
            <h2 className='header2'>Cooking Instructions</h2>
            <div>
            <table  className='tablestyleIng' >
                    <tbody >
                        {instructionInfo.map((data) => {
                            return (
                            <tr>
                                <td >{data.id}</td>
                                <td >{data.name}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return( <div>
            <Header/>
            <h2 className="left-margin">{listening ? 'Listening...' : ''}</h2>
      <form onSubmit={handleSubmit} className="centerdiv">
        <label>
          <input type="text" value={user1Transcript || userTranscript} onChange={handleChange} onKeyPress={(event) => {if (event.key === 'Enter'){handleSubmit(event);}}} placeholder='Click here to search the recibedb' className="textareastyleRL"
          />
        </label>
      </form>
      <button className="rounded-buttonrl" onClick={SpeechRecognition.startListening}>SPEAK</button>
      <button className="rounded-buttonrl1" onClick={resetTranscript}>CLEAR</button>
      <button className="rounded-buttonrl2" onClick={handleSubmit}>SUBMIT</button>
            {response}
           <Footer/>
        </div>
    );
}
export default RecipeList;