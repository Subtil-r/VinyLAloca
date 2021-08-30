
// import axios from 'axios';
import React, {useState} from "react";
import MenuProvider from "react-flexible-sliding-menu";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Product from './Components/Product/Product';
import Menu from './Components/Menu';
import  ProductsList from "./Components/Product/ProductsList";
import './styles/product.css';








function App() {



// const [currentdate,setcurrentDate] = useState('')
// useEffect(()=>{
//   var date = new Date().getDate()
//   var month =new Date().getMonth() +1
//   var year = new Date().getFullYear()
//   var hours = new Date().getHours()
//   setcurrentDate(
//     date +'/' + month + '/' + year +'' + hours
//   )

// },[])


  const [cartItems,setCartItems] = useState([]);
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.data.id === product.data.id);
    if(exist) {
      setCartItems(cartItems.map((x) => x.data.id === product.data.id ? {...exist,qty:exist.qty +1 } :x
        ))
        console.log(product.data);
    } else {
      setCartItems([...cartItems,{...product,qty:1}])
      console.log()
    }

  // axios
  //     .post('https://vinylalocamusic.herokuapp.com/api/orders', {
  //       reference: "747365686767",
  //       createdAt:currentdate.toString,
  //       user:null,
  //       carrier:null,
  //       product:['product'].toString,
  //       moreInformations:null

  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  

  }
  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.data.id === product.data.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.data.id !== product.data.id ))
    } else {
      setCartItems(cartItems.map((x) => 
        x.data.id === product.data.id ? {...exist,qty:exist.qty -1 } :x
        ))
    }
  }
  const removeAll = (product) => {
    const exist = cartItems.find((x) => x.data.id === product.data.id);
    if(exist.qty >= 1) {
      setCartItems(cartItems.filter((x) => x.data.id !== product.data.id ))
    }
  }




  return (
    <div className='relative'>
    <Router>
          <MenuProvider width="450px" MenuComponent={Menu} animation="push">
      
    <div className="App">
      <Header countCartItems={cartItems.length}/>
    </div>

    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route path="/cart">
          <Cart removeAll={removeAll}cartItems={cartItems} addToCart={addToCart} removeFromCart= {removeFromCart} />
        </Route>
        <Route path="/checkout">
          <Checkout  />
        </Route>
        <Route path="/product/:id">
          <Product addToCart={addToCart}  cartItems={cartItems} />
        </Route>
        <Route path="/productslist">
          <ProductsList addToCart ={addToCart}  />

        </Route>
      </Switch>

    </div>
    </MenuProvider>
    </Router>
    </div>
  );


}

export default App;
