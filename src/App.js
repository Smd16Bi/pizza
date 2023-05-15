import React from 'react';
import "./scss/app.scss";
import { Header } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from './pages';
import axios from 'axios';
import { setPizzas as setPizzasAction } from './Redux/action/pizzas';
import store from './Redux/store';
import { connect } from 'react-redux';



class App extends React.Component {
  componentDidMount() {
    axios.get("/db.json")
      .then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      })
  }
  render() {
    console.log(this.props)
    return (

      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={[this.props.items]} />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </div>
    )
  }
}


// const App = () => {
// const [pizzas, setPizzas] = React.useState([])
// React.useEffect(() => {
//   axios.get("/db.json")
//     .then(({ data }) => {
//       setPizzas(data.pizzas)
//     })
// }, []);
// return (
//   <div className="wrapper">
//     <Header />
//     <div className="content">
//       <Routes>
//         <Route path="/" element={<Home items={pizzas}  />}></Route>
//         <Route path="/cart" element={<Cart />}></Route>
//       </Routes>
//     </div>
//   </div>
// )
// }


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
