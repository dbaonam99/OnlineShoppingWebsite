import React, { useEffect, useState } from 'react';
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
import NewsCate from './pages/NewsCate';


import Login from './components/admin/Login/Login';

import { CartProvider } from './contexts/Cart'
import Dashboard from './components/admin/Dashboard/Dashboard';
import { UserProvider } from './contexts/User';
import { ChatProvider } from './contexts/Chat';
import LoadingPage from './components/LoadingPage';
import Toast from './components/Toast';
import Checkout from './pages/Checkout';

function App(props) {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if (window.location.href.split('/')[3] === "") {
      setTimeout(()=>{
        setLoading(false)
      }, 5500000)
    } else {
      setLoading(false)
    }
  },[])

  return (
    <UserProvider>
    <CartProvider>
    <ChatProvider>
      { loading === true &&
        <LoadingPage
          loading={loading} 
        />
      }
      { loading === false &&
        <Router>
          <div className="App">
            <Toast/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/news" exact component={News}></Route>
            <Route path="/men" exact component={Men}></Route>
            <Route path="/women" exact component={Women}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/collection/:id" exact component={Collection}></Route>
            <Route path="/products/:id" exact component={ProductDetail}></Route>
            <Route path="/news/:id" exact component={NewsDetail}></Route>
            <Route path="/news/category/:cate" exact component={NewsCate}></Route>
            <Route path="/admin" exact component={Login}></Route>
            <Route path="/admin/dashboard" exact component={Dashboard}></Route>
            <Route path="/checkout" exact component={Checkout}></Route>
          </div>
          <OpenChatBtn/>
        </Router>
      }
    </ChatProvider>
    </CartProvider>
    </UserProvider>
  );
}

export default App;
