import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import background from '../images/backgrounds/Line2.png'
import icon from '../images/icons/house.png'
import '../LogInOrAutorization/LogIn.css'

const BodySignIn = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: `1500px 800px`,
      backgroundColor: `#eeeeee`}}>
      <div className="LogInBlock1">
        <div className="LogInBlock2">
          <div className="LogInBlock3">
            <div className="LogInSection1">
              <img className="IconHouse" src={icon}/>
              <a className="LogInText">Мой дом</a>
            </div>
            <div className="LogInSection2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export const SignIn = () => {
    return (
      <div>
        <BodySignIn></BodySignIn>
      </div>
    );
  }

export default SignIn;