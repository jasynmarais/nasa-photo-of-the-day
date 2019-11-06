import React, { useEffect } from "react";
import "./App.css";

const axios = require('axios');

const apiKey = 'vSbHMwWWl96BgKXN2Qxqm8JLJ17HoWsqlC0KAUMK';

function App() {

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
