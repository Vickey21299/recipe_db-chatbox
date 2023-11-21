import React, { useEffect, useState } from 'react';
import './RecipeList.css';
import { BasicTable } from './../components/BasicTable';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';

const RecipeList = (props) => {
  const [isFirstTime, setFirstTime] = useState(false);
  const userTranscript = localStorage.getItem('userTranscript');
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const navigate = useNavigate();
  const [user1Transcript, setUser1Transcipt] = useState('');
  useEffect(() => {
    setUser1Transcipt(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function handleChange(event) {
    setUser1Transcipt(event.target.value);
  }

  function resetTranscript() {
    SpeechRecognition.stopListening();
    setUser1Transcipt('');
  }

  function handleSubmit(event) {
    console.log("user wants to say: ", user1Transcript);
    if (user1Transcript.trim().length > 0) {
    //   localStorage.setItem('userTranscript', user1Transcript);
    //   axios({
    //     method: 'GET',
    //     url: `https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/findRecipeByText/` + user1Transcript,
    //   })
    //     .then((res) => {
    //       console.log('data got', res.data);
    //       setJsonData(res.data);
    //     })
    //     .catch((err) => {
    //       console.log('error got', err);
    //     });
    //   setFirstTime(true);
    //   window.location.reload(false);
    navigate('/recipe-voice-bot/search_recipe')
    localStorage.setItem('userTranscript', user1Transcript);
    window.location.reload(false);
    }
  }

  useEffect(() => {
    if (!isFirstTime) {
      axios({
        method: 'GET',
        url: `https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/findRecipeByText/` + userTranscript
        // url : 'http://localhost:3002/api/findRecipeByText/' + userTranscript
      })
        .then((res) => {
          console.log('data got', res.data);
          setJsonData(res.data);
        })
        .catch((err) => {
          console.log('error got', err);
        });
      setFirstTime(true);
    }
  }, []);

  const [jsonData, setJsonData] = useState(null);
  const response =
    jsonData === null ? (
      <div>
        <div className="marginForSpinner">
          <ColorRing colors={['#309D66', '#309D66', '#309D66', '#309D66', '#309D66']} />
        </div>
        <Footer />
      </div>
    ) : (
      <div>
        <BasicTable jsonData={jsonData}></BasicTable>
        <Footer />
      </div>
    );

  return (
    <div>
      <Header></Header>
      <h2 className="left-margin">{listening ? 'Listening...' : ''}</h2>
      <form onSubmit={handleSubmit} className="centerdiv">
        <label>
          <textarea type="text" value={user1Transcript} onChange={handleChange} placeholder="Click SPEAK Button to ask queries to RecipeDB..."className="textareastyleRL"
          />
        </label>
      </form>
      <button className="rounded-buttonrl" onClick={SpeechRecognition.startListening}>SPEAK</button>
      <button className="rounded-buttonrl1" onClick={resetTranscript}>CLEAR</button>
      <button className="rounded-buttonrl2" onClick={handleSubmit}>SUBMIT</button>
      {response}
    </div>
  );
};

export default RecipeList;
