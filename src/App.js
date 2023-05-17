import React from 'react';
import "./scss/app.scss";
import { Header } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from './pages';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPizzas } from "./Redux/action/pizzas"

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
      console.log(data);
    })
  }, []);

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

