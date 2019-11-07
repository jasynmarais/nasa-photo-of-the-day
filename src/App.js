import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import InputDate from './components/InputDate';
import MediaUrl from './components/MediaUrl';
import Explanation from './components/Explanation';
import PhotoDate from './components/PhotoDate';
import Title from './components/Title';
import Header from './components/Header';

const apiKey = 'vSbHMwWWl96BgKXN2Qxqm8JLJ17HoWsqlC0KAUMK';
const photoOfTheDayApi = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function App() {
  const [mediaUrl, setImage] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [date, setDate] = useState('');
  const [dateQuery, setDateQuery] = useState('');

  const handleDateChange = e => {
    setDateQuery(e.target.value);
  };

  useEffect(() => {
    axios
    .get(`${photoOfTheDayApi}&date=${dateQuery}`)
      .then(res => {
        setTitle(res.data.title);
        setDate(res.data.date);
        setImage(res.data.url);
        setExplanation(res.data.explanation);
        setMediaType(res.data.media_type);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dateQuery]);

  return (
  <div className="App">
    <Header />
    <InputDate handleDateChange={handleDateChange} dateQuery={dateQuery} />
    <Title title={title} />
    <MediaUrl mediaUrl={mediaUrl} mediaType={mediaType} />
    <PhotoDate date={date} />
    <Explanation explanation={explanation} />
  </div>
  );
}

export default App;
