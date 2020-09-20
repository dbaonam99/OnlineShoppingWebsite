import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 


import Home from './pages/Home.js'
import NewsPages from './pages/NewsPages.js'
import Men from './pages/Men.js'



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/news" exact component={NewsPages}></Route>
        <Route path="/men" exact component={Men}></Route>
      </div>
    </Router>
  );
}

export default App;
