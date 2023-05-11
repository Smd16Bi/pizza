import React from 'react';
import "./scss/app.scss";
import { Header } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from './pages';
import axios from 'axios';


const App = () => {
  const [pizzas, setPizzas] = React.useState([])
  React.useEffect(() => {
    axios.get("/db.json")
    .then(({data}) => {
      setPizzas(data.pizzas)
    })
    // async function getData() {
    //   const response = await fetch("/db.json");
    //   const jsonData = await response.json();
    //   setPizzas(jsonData.pizzas);
    // }
    // getData()
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas}  />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
