import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [regState, setRegState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  
  const onFNameChange = (e) => {
    setRegState({ ...regState, firstname: e.target.value });
  };
  const onLNameChange = (e) => {
    setRegState({ ...regState, lastname: e.target.value });
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
  
  
  const checkPass = (e) => {
    if (regState.password !== regState.cpassword){
      alert("Passwords don't match")
    }
  }

  const handleReg = (e) => {
    e.preventDefault();
    const data = {
      firstname: regState.firstname,
      lastname: regState.lastname,
      email: regState.email,
      password: regState.password,
    };
    console.log("My form data: ", data);
    if (regState.password !== regState.cpassword){
      //alert("Passwords don't match")
      <p>"Passwords don't match"</p>
    } else {
      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        url: "https://vinylalocamusic.herokuapp.com/api/users", //placeholder for api
        data: data
      })
        .then((res) => console.log("My response: ", res))
        //.then((res) => console.log("The pediction value: ", res.data['Prediction Price']))
        //.then((res) => setState({ ...state, "Prediction Price": parseFloat(res.data['Prediction Price']).toFixed(3)})) 
        .catch((err) => console.log(err));
    }
  };
  
  return (
    <div className="register border-b-8 border-vinylyellow">
    <h1 className="text-center text-3xl font-semibold text-vinylpurple my-5">No account ?</h1>
    <form className="mx-5 my-10 grid grid-cols-5 gap-5 items-center" onClick={checkPass}>
      
      <label htmlFor="fistName" className="text-vinylpurple uppercase leading-4 text-xs">first name</label>
      <input 
      type="text" 
      id="firstName" 
      className="border-2 border-vinylyellow h-10 col-span-4 p-4"
      value={regState.firstname}
      onChange={onFNameChange} 
      placeholder="first name" 
      />

      <label htmlFor="lastName" className="text-vinylpurple uppercase leading-4 text-xs">last name</label>
      <input 
      type="text" 
      id="lastName" 
      className="border-2 border-vinylyellow h-10 col-span-4 p-4"
      value={regState.lastname}
      onChange={onLNameChange} 
      placeholder="last name" 
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
      
      <input type="submit" id="submitReg" className="tag-container bg-vinylyellow px-7 w-max py-1 col-span-2 col-start-2 font-semibold text-white text-lg uppercase" value="register" onClick={handleReg} />
      
    </form>
  </div>
  )
}
