import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 


import Header from './components/Header.js'
import Banner from './components/Banner.js'

import Home from './pages/Home.js'



function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Route path="/" exact component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
