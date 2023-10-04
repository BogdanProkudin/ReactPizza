import React, { Component, useEffect, useState } from 'react';
import { Routes, BrowserRouter, Route, Form, Link } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header.tsx';
import NothingFound from './components/NothingFound';

import PizzaBLock from './components/PizzaBlock';
import Skeleton from './components/Skeleton';
import Sort from './components/Sort';
import './libs/app.scss';
import './libs/style.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header SearchItems={undefined} setSearchItems={undefined} />

      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
