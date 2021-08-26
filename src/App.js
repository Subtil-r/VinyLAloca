import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import MenuProvider from "react-flexible-sliding-menu";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/CartShop";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [data, setData] = useState(null);
  const [dataTag, setDataTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [getUser, setGetUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  

  useEffect(() => {
    getData();
    getDataTag();
    getUsers();
  }, []);

async function getData() {
    axios.get("https://vinylalocamusic.herokuapp.com/api/products")
      .then((res) => {
        console.log(res)
        setData(res);
        //data = res;
        //console.log(res.data.['hydra:member'][0].name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      /* .finally(() => {
      }); */
  }

  async function getDataTag() {
    await axios("https://vinylalocamusic.herokuapp.com/api/tags")
      .then((res) => {
        setDataTag(res);

        //console.log(res.data.['hydra:member'][0].name);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return <Loading />;
  if (error) return "Error!";

  async function getUsers() {
    axios({
      headers: { "Content-Type": "application/json" },
      //credentials: 'include',
      //withCredentials: true,
      url: "https://vinylalocamusic.herokuapp.com/api/users", //placeholder for api
    })
      .then((res) => {
        console.log("My response: ", res);
        setGetUser(res);
      })
      .catch((err) => console.log(err));
  }

  function checkAuth(value) {
    setIsAuth(value);
  }

  console.log("my data: ", data);

  return (
    <BrowserRouter>
      <div className="app relative">
        <header className="app-header">
          <MenuProvider width="375px" MenuComponent={Menu}>
            <Header isAuth={isAuth} checkAuth={checkAuth}/>
          </MenuProvider>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home data={data} />
          </Route>
          <Route
            path="/login"
            component={() => <Login checkAuth={checkAuth} />}
          />

          <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />

          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
