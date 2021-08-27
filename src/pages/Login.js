import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function Login({checkAuth}) {

  const history = useHistory();

  const [redirect, setRedirect] = useState(false);

  //const [userId, setUserId] = useState(null);
  
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  
 // axios.defaults.withCredentials = true;

  const onEmailChange = (e) => {
    setLoginState({ ...loginState, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setLoginState({ ...loginState, password: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: loginState.email,
      password: loginState.password,
    };

    //need to creat a condition here before be able to be redirected
    console.log("My form data: ", data);
    if( loginState.email === '' ||  loginState.password === ''){
      alert('Please, fill all the fields')
      setRedirect(false);
    } else {

       axios({
         method: 'post',
         headers: { 'Content-Type': 'application/json' },
         //credentials: 'include',
         withCredentials: true,
         url: "https://cors-anywhere.herokuapp.com/https://vinylalocamusic.herokuapp.com/api/login", //placeholder for api
         data: data
       })
         .then((res) => {
           console.log("My response from login: ", res)

           /* setUserId(res.data.id); 
            
           setRedirect(true); 
           
           checkAuth(true);
           
           history.push('/profile') */
          })
         .catch((err) => console.log(err));

         setRedirect(true); 
           
         checkAuth(true);
           
         history.push('/profile')
         
    }
  };

   if(redirect) {
    return <Redirect to='/profile' />;
  }


  return (
    <div className="login-container">
      <div className="login border-b-4 border-vinylyellow">
        <h1 className="text-center text-3xl font-semibold text-vinylpurple my-5">Log in to your account</h1>
        <form className="mx-5 my-10 grid grid-cols-5 gap-5 items-center" id="submitForm">
          
          <label 
          htmlFor="emailAd" 
          className="text-vinylpurple uppercase leading-4 text-xs"
          >email address</label>
          <input
          required 
          type="email" 
          id="emailAd" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4" 
          value={loginState.email}
          onChange={onEmailChange}
          placeholder="your@email.com"
          />
          
          <label 
          htmlFor="password" 
          className="text-vinylpurple uppercase leading-4 text-xs"
          >password</label>
          <input
          required 
          type="password" 
          id="password" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={loginState.password}
          onChange={onPasswordChange} 
          placeholder="******" 
          />
          
         <input 
          type="submit" 
          id="submit" 
          form="submitForm"
          className="tag-container bg-vinylyellow px-7 py-1 col-span-2 col-start-2 font-semibold text-white text-lg uppercase" 
          value="login" 
          onClick={handleLogin}/> 
          
          <p href="#" className="text-vinylpurple uppercase leading-4 text-xs col-span-2 col-start-4">FORGOT YOUR PASSWORD?</p>
        </form>
         
      </div>
      
      <RegisterForm />
      
    </div>
  )
}
