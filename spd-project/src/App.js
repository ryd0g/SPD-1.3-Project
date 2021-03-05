import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Redirect from "./components/pages/Redirect";
import SignUp from "./components/pages/SignUp";
import "./App.css";

library.add(fab, faGithub);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forecasts" exact component={Redirect} />
          <Route path="/alerts" exact component={Redirect} />
          <Route path="/historical-data" exact component={Redirect} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;