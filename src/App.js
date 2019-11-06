import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { InputDate } from './components/InputDate';
import { MediaUrl } from './components/MediaUrl';
import { Explanation } from './components/Explanation';
import { PhotoDate } from './components/PhotoDate';
import { Title } from './components/Title';

const apiKey = 'vSbHMwWWl96BgKXN2Qxqm8JLJ17HoWsqlC0KAUMK';

function App() {
  const [MediaUrl, setImage] = useState('');
  const [MediaType, setMediaType] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [date, setDate] = useState('');
  const [dateQuery, setDateQuery] = useState('2019-10-18');

  const handleDateChange = e => {
    setDateQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateQuery}`)
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
  <div className="header-container">
  <h1>NASA Photo of the Day</h1>
</div>
  <Title title={title} />
  <InputDate handleDateChange={handleDateChange} dateQuery={dateQuery} />
  <PhotoDate date={date} />
  <MediaUrl mediaUrl={mediaUrl} mediaType={mediaType} />
  <Explanation explanation={explanation} />
  
</div>
  );
}

export default App;
