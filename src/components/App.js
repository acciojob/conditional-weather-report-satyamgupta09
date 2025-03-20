import React, { Component, useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import '../styles/App.css';

const App = () => {
  const [temp, setTemp] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setTemp({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div id="main">
      <WeatherDisplay temp={temp} />
    </div>
  );
};

export default App;
