import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 


import Home from './pages/Home.js'
import News from './pages/News.js'
import Men from './pages/Men.js'
import Women from './pages/Women.js'
import Contact from './pages/Contact.js'
import Product from './pages/Product.js'
import Collection from './pages/Collection';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/news" exact component={News}></Route>
        <Route path="/men" exact component={Men}></Route>
        <Route path="/women" exact component={Women}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/product" exact component={Product}></Route>
        <Route path="/collection" exact component={Collection}></Route>
      </div>
    </Router>
  );
}

export default App;
