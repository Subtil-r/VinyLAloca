import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
  
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

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
    console.log("My form data: ", data);
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: "", 
      data: data
    })
      .then((res) => console.log("My response: ", res))
      //.then((res) => console.log("The pediction value: ", res.data['Prediction Price']))
      //.then((res) => setState({ ...state, "Prediction Price": parseFloat(res.data['Prediction Price']).toFixed(3)})) 
      .catch((err) => console.log(err));
  };

  const [regState, setRegState] = useState({
    full_name: "",
    email: "",
    password: "",
    cpassword: "",
    country: "",
    city: "",
    address: "",
    number: "",
    postal: "",
  });

  const onFNameChange = (e) => {
    setRegState({ ...regState, full_name: e.target.value });
  };
  const onEmailRegChange = (e) => {
    setRegState({ ...regState, email: e.target.value });
  };
  const onPasswordRegChange = (e) => {
    setRegState({ ...regState, password: e.target.value });
  };
  const onCPasswordChange = (e) => {
    setRegState({ ...regState, cpassword: e.target.value });
  };
  const onCountryChange = (e) => {
    setRegState({ ...regState, country: e.target.value });
  };
  const onCityChange = (e) => {
    setRegState({ ...regState, city: e.target.value });
  };
  const onAddressChange = (e) => {
    setRegState({ ...regState, address: e.target.value });
  };
  const onNumberChange = (e) => {
    setRegState({ ...regState, number: e.target.value });
  };
  const onPostalChange = (e) => {
    setRegState({ ...regState, postal: e.target.value });
  };
  
  const checkPass = (e) => {
    if (regState.password !== regState.cpassword){
      alert("Passwords don't match")
    }
  }

  const handleReg = (e) => {
    e.preventDefault();
    const data = {
      full_name: regState.full_name,
      email: regState.email,
      password: regState.password,
      country: regState.country,
      city: regState.city,
      address: regState.address,
      number: regState.number,
      postal: regState.postal,
    };
    console.log("My form data: ", data);
    if (regState.password !== regState.cpassword){
      alert("Passwords don't match")
    } else {
      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        url: "", 
        data: data
      })
        .then((res) => console.log("My response: ", res))
        //.then((res) => console.log("The pediction value: ", res.data['Prediction Price']))
        //.then((res) => setState({ ...state, "Prediction Price": parseFloat(res.data['Prediction Price']).toFixed(3)})) 
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="login border-b-4 border-vinylyellow">
        <h1 className="text-center text-3xl font-semibold text-vinylpurple my-5">Log in to your account</h1>
        <form className="mx-5 my-10 grid grid-cols-5 gap-5 items-center">
          
          <label 
          htmlFor="emailAd" 
          className="text-vinylpurple uppercase leading-4 text-xs"
          >email address</label>
          <input 
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
          type="password" 
          id="password" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={loginState.password}
          onChange={onPasswordChange} 
          placeholder="******" 
          />
          
          <input type="submit" id="submit" className="tag-container bg-vinylyellow px-7 py-1 col-span-2 col-start-2 font-semibold text-white text-lg uppercase" value="login" onClick={handleLogin}/>
          
          <p href="#" className="text-vinylpurple uppercase leading-4 text-xs col-span-2 col-start-4">FORGOT YOUR PASSWORD?</p>
        </form>
      </div>
      

      <div className="register border-b-8 border-vinylyellow">
        <h1 className="text-center text-3xl font-semibold text-vinylpurple my-5">No account ?</h1>
        <form className="mx-5 my-10 grid grid-cols-5 gap-5 items-center" onClick={checkPass}>
          
          <label htmlFor="fullName" className="text-vinylpurple uppercase leading-4 text-xs">full name</label>
          <input 
          type="text" 
          id="fullName" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={regState.full_name}
          onChange={onFNameChange} 
          placeholder="full name" 
          />
          
          <label htmlFor="emailAdReg" className="text-vinylpurple uppercase leading-4 text-xs">email address</label>
          <input 
          type="email" 
          id="emailAdReg" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={regState.email}
          onChange={onEmailRegChange} 
          placeholder="your@email.com" 
          />
          
          <label htmlFor="passwordReg" className="text-vinylpurple uppercase leading-4 text-xs">password</label>
          <input 
          type="password" 
          id="passwordReg" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4" 
          value={regState.password}
          onChange={onPasswordRegChange}
          placeholder="******" 
          />
          
          <label htmlFor="confirmPass" className="text-vinylpurple uppercase leading-4 text-xs">confirm password</label>
          <input 
          type="password" 
          id="confirmPass" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={regState.cpassword}
          onChange={onCPasswordChange} 
          placeholder="******" 
          />
          
          <label htmlFor="country" className="text-vinylpurple uppercase leading-4 text-xs">country</label>
          <input 
          type="text" 
          id="country" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4" 
          value={regState.country}
          onChange={onCountryChange}
          placeholder="country" 
          />
          
          <label htmlFor="city" className="text-vinylpurple uppercase leading-4 text-xs">city</label>
          <input 
          type="text" 
          id="city" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={regState.city}
          onChange={onCityChange} 
          placeholder="city" 
          />
          
          <label htmlFor="address" className="text-vinylpurple uppercase leading-4 text-xs">address</label>
          <input 
          type="text" 
          id="address" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={regState.address}
          onChange={onAddressChange} 
          placeholder="address" 
          />
          
          <label htmlFor="number" className="text-vinylpurple uppercase leading-4 text-xs">number</label>
          <input 
          type="number" 
          id="number" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4"
          value={regState.number}
          onChange={onNumberChange} 
          placeholder="00" 
          />
          
          <label htmlFor="zipCode" className="text-vinylpurple uppercase leading-4 text-xs">zip code</label>
          <input 
          type="number" 
          id="zipCode" 
          className="border-2 border-vinylyellow h-10 col-span-4 p-4" 
          value={regState.postal}
          onChange={onPostalChange}
          placeholder="0000" 
          />
          
          
          <input type="submit" id="submitReg" className="tag-container bg-vinylyellow px-7 w-max py-1 col-span-2 col-start-2 font-semibold text-white text-lg uppercase" value="register" onClick={handleReg} />
          
        </form>
      </div>
    </div>
  )
}
