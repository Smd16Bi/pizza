import React from 'react';
import "./scss/app.scss";
import { Header } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from './pages';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from "./Redux/action/pizzas"


const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  });

  console.log(state);

  React.useEffect(() => {
    axios.get("/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    })
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={state.items} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

