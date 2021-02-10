import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home.js'
import Footer from './components/Footer.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  </>
  );
}

export default App;
