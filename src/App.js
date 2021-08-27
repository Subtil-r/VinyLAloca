
import axios from 'axios';
import React, {useState,useEffect} from "react";
import MenuProvider from "react-flexible-sliding-menu";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Product from './Components/Product/Product';
import Menu from './Components/Menu';
import  ProductsList from "./Components/Product/ProductsList";
import './styles/product.css';
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute";








function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);



const [currentdate,setcurrentDate] = useState('')
useEffect(()=>{
  var date = new Date().getDate()
  var month =new Date().getMonth() +1
  var year = new Date().getFullYear()
  var hours = new Date().getHours()
  setcurrentDate(
    date +'/' + month + '/' + year +'' + hours
  )

},[])


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


  function checkAuth(value) {
    setIsAuth(value);
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
        <Route
            path="/login"
            component={() => <Login checkAuth={checkAuth} />}
          />
        <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />

        </Route>
      </Switch>

    </div>
    </MenuProvider>
    </Router>
    </div>
  );



// function App() {
//   const [data, setData] = useState(null);
//   const [dataTag, setDataTag] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAuth, setIsAuth] = useState(false);
  

//   useEffect(() => {
//     getData();
//     getDataTag();
//   }, []);

// async function getData() {
//     axios.get("https://vinylalocamusic.herokuapp.com/api/products")
//       .then((res) => {
//         console.log(res)
//         setData(res);
//         //data = res;
//         //console.log(res.data.['hydra:member'][0].name);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   async function getDataTag() {
//     await axios("https://vinylalocamusic.herokuapp.com/api/tags")
//       .then((res) => {
//         setDataTag(res);

//         //console.log(res.data.['hydra:member'][0].name);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   if (loading) return <Loading />;
//   if (error) return "Error!";


//   function checkAuth(value) {
//     setIsAuth(value);
//   }

//   console.log("my data: ", data);

//   return (
//     <BrowserRouter>
//       <div className="app relative">
//         <header className="app-header">
//           <MenuProvider width="375px" MenuComponent={Menu}>
//             <Header isAuth={isAuth} checkAuth={checkAuth}/>
//           </MenuProvider>
//         </header>
//         <Switch>
//           <Route path="/" exact>
//             <Home data={data} tag={dataTag} />
//           </Route>
//           <Route
//             path="/login"
//             component={() => <Login checkAuth={checkAuth} />}
//           />

//           <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />

//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={Cart} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//         {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//       </div>
//     </BrowserRouter>
//   );
}

export default App