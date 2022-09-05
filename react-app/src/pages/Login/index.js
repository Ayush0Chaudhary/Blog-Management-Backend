import { findByDisplayValue, render } from "@testing-library/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getAllBlogs} from "../../services/django"


const LoginPage = () => {


    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    
  getAllBlogs()

  return (
    // nav bar

    <div className="login-page">
      <input 
        id="login-email" 
        type="email" 
        placeholder="Email" 
        className="input" 
        onChange={(event)=>{setloginEmail(event.target.value)}}/>
        <br></br>
      <input
        id="login-password"
        type="password"
        placeholder="Password"
        className="input"
        onChange={(event)=>{setloginPassword(event.target.value)}}/>
      <br></br>
    </div>
  );
};

export default LoginPage;
