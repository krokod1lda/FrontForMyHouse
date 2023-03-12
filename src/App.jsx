
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="MyHouse">Мой дом</p>
        <a className="Buy">Купить</a>
        <a className="Ask">Задать вопрос</a>
        <button className="Btn">Войти</button>
      </header>
      <body className="App-body">
        <div className="Block1">
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
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
