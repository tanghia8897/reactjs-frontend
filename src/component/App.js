import React, { Component } from 'react';
import './../Css/App.css';
import Nav from './Nav'
import Footer from './Footer'
import Directional from '../router/Directional';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <Router>
        <div>
        <Nav/>
          <Directional/>
        <Footer/>
      </div>
      </Router>
    )
  }
} 

export default App;
