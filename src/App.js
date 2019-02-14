import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/Navbar';

function App(){

  return (
    <Router>
      <div>
        <Navbar/>
        <div className="row mt-4">
          <div className="col-md-8 mx-auto">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;