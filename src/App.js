import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 


import Header from './components/Header.js'

import Home from './pages/Home.js'
import News from './pages/News.js'



function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/news" exact component={News}></Route>
      </div>
    </Router>
  );
}

export default App;
