import React from 'react';
import './App.css';
import { HousesCarousel } from './Carousel/HousesCarousel';
import LogIn from './LogInOrAutorization/LogIn.jsx'
import SignIn from './SignIn/SignIn.jsx'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Home() {
  return <Link to="/" className="MyHouse">Мой Дом</Link>
}

function Buying() {
  return <Link to="/buying" className="Buy">Купить</Link>
}

function AskQuestion() {
  return <Link to="/ask" className="Ask">Задать вопрос</Link>
}

function ForLogin() {
  return <button className="Login">
    <Link to="/login">Войти</Link>
  </button>
}

const Body = () => {
  return (
    <div className="App-body" id="Appbody">
            <div className='SearchSectionWrapper'>
              <div className='Block1'>
                <div className="Section1">
                  <div className="Block2">
                    <div>
                    <button className="Buy2">Купить</button>
                    </div>
                    <div className="Parameters">
                      <div className="Parameters_wrapper">
                        <select className="City">
                          <option value="1">Москва</option>
                          <option value="2">Санкт-Петербург</option>
                          <option value="3">Аткарск</option>
                          <option value="4">Нью-Йорк</option>
                        </select>
                        <select className="Type">
                          <option value="1">Коттедж</option>
                          <option value="2">Квартира</option>
                          <option value="3">Студия</option>
                        </select>
                        <button className="Btn2">Бюджет</button>
                        <div className="FindContainer">
                          <button className="Find">Поиск</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HousesCarousel></HousesCarousel>
          </div>
  );
}


function App() {
  return (
    <div>
      <div className="App">
      <Router>
        <div className="App-header">
          <Home></Home>
          <Buying></Buying>
          <AskQuestion></AskQuestion>
          <ForLogin></ForLogin>
        </div>
        <Routes>
          <Route path="/" exact element= {<Body />}>
          </Route>
          <Route path="/login" exact element = {<LogIn />}>
          </Route>
          <Route path="/buying" exact>
          </Route>
          <Route path="/ask" exact>
          </Route>
          <Route path="/login/signIn" exact element= {<SignIn />}>
          </Route>
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
