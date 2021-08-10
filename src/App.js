
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import axios from "axios";
import MenuProvider from 'react-flexible-sliding-menu';
import Header from "./components/Header";
import Menu from './components/Menu';
import Cart from './components/CartShop';
import Loading from './components/Loading';
import Home from "./pages/Home";
import Login from './pages/Login';
import Profile from './pages/Profile'
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(()=>{
    getData()
  }, []); 

   async function getData(){
    //https://ceren-app.herokuapp.com/predict
    //https://cors-anywhere.herokuapp.com/https://vinylaloca.herokuapp.com/api/product
    await axios("https://cors-anywhere.herokuapp.com/https://vinylaloca.herokuapp.com/api/product")
    .then((res)=>{
      setData(res.data);
      
      //console.log(res.data["Property Subtype"].default[3]);
    })
    .catch((error)=>{
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(()=>{
      setLoading(false);
    });
  }; 

  if(loading) return <Loading />;
  if(error) return "Error!";



  
  
  return (
    <BrowserRouter>
      <div className="app relative">
        <header className="app-header">
          <MenuProvider width='375px' MenuComponent={Menu}>
          <Header />
          </MenuProvider>
        </header>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/product' component={Product}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */} 
      </div>
    </BrowserRouter>
  );
}

export default App;
