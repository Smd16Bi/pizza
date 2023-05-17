import React from 'react';
import "./scss/app.scss";
import { Header } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from './pages';



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

