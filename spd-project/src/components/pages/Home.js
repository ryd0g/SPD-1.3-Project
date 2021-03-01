import React from "react";
import "../../App.css";
import CurrentWeatherMain from ".././CurrentWeatherMain.js";
import CurrentWeatherAdvanced from ".././CurrentWeatherAdvanced.js";

function Home() {
  return (
    <>
      <CurrentWeatherMain />
      <CurrentWeatherAdvanced />
    </>
  );
}

export default Home;
