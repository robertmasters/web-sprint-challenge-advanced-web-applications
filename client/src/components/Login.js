import React, {useState} from "react";
import axios from 'axios'
import { Route, NavLink, useHistory } from 'react-router-dom'
// import { useState } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const { push } = useHistory();
  const [credentials, setCredentials] =  useState ({
      username: '',
      password: ''

  });

  const handleChange = e => {
    setCredentials({
 
        ...credentials,
        [e.target.name]: e.target.value
      
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const handleSubmit = e => {

    e.preventDefault();
    console.log("creds: ",credentials);

    axiosWithAuth()
    .post("/login", credentials)
    .then((res)=>{

    console.log(res)
    //assign res to data
    window.localStorage.setItem("token", res.data.payload)
    console.log("Pushing to /protected")
    push('/protected');
      
    })
    .catch(error=>{
      console.log("Login error: ", error)
      
    })
  }
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input 
            name= 'username'
            type = 'text'
            value = {credentials.username}
            onChange = {handleChange}
          />
        </label>

        <label>
        Password: 
        <input 
        name= 'password'
        type = 'password'
        value = {credentials.password}
        onChange = {handleChange}
      />
      </label>
      <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
