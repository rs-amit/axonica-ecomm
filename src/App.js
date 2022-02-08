import React from 'react';
import "./App.css";
import Header from './component/Header';
import Home from "./Screen/Home"
import Annoucement from './component/Annoucement.js';
import Cart from './Screen/Cart';
import { BrowserRouter as Router, Switch, Route, Redirect, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <Annoucement />
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

