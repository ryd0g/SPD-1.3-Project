import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

library.add(fab, faGithub);

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>Weather App</header>
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
}

export default App;
