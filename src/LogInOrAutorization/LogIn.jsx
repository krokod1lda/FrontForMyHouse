import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import background from '../images/backgrounds/Line1.png'
import icon from '../images/icons/house.png'
import './LogIn.css'


function SignIn() {
  return <Link to="/login/signIn" className="LogInBut">
    <span className="TextInBut">Войти</span>
  </Link>
}

function SignUp() {
  return <Link to="/signUp" className="LogInBut">
    <span className="TextInBut">Регистрация</span>
  </Link>
}

const BodyLogIn = () => {
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
              <SignIn></SignIn>
              <SignUp></SignUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export const LogIn = () => {
    return (
      <div>
        <BodyLogIn></BodyLogIn>
      </div>
    );
  }

export default LogIn;