import React from "react";
// import useFetch from "../../hooks/AnimalFetch";
// import MainNavProps from "../../types/mainNavPropType";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import 'src\components\mainnav\mainNav.css' 
import './App.css'

const MainNav = () =>{
    return(
   <nav className="navbar">
                <h2>BlogBook</h2>
                <h4 className='userNameHead'>{"ayush"}</h4>
                <button className="'button" onClick={console.log('allblog')}>All Blogs</button>
                <button className="'button" onClick={console.log('myblog')}>My Blogs</button>
                <button className='button' onClick={console.log("sadf")}>SignOut</button>
            </nav> 
        
    );

}

export default MainNav;