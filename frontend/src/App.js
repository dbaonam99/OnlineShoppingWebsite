import React from 'react';
import './App.css';
import './Styles/Chat.css'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 
import Home from './pages/Home.js'
import News from './pages/News.js'
import Men from './pages/Men.js'
import Women from './pages/Women.js'
import Contact from './pages/Contact.js'
import ProductDetail from './pages/ProductDetail.js'
import Collection from './pages/Collection';
import NewsDetail from './pages/NewsDetail';
import OpenChatBtn from './components/OpenChatBtn';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/news" exact component={News}></Route>
        <Route path="/men" exact component={Men}></Route>
        <Route path="/women" exact component={Women}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/collection" exact component={Collection}></Route>
        <Route path="/products/:id" exact component={ProductDetail}></Route>
        <Route path="/news/:id" exact component={NewsDetail}></Route>
      </div>
      <OpenChatBtn/>
    </Router>
  );
}

export default App;
