import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/todoNetworks">TodoApp With NetworkCalls</Link>  
        <Link to="/grid-game">Grid Memory Game</Link>  
         <Link to="/users">UsersPage</Link>  
        <Link to="/mobx-todo-app">Todo App</Link>  
        <Link to="/page-1">Page 1</Link>
        <Link to="/country-dashboard-app">Country</Link>
        <Link to='/emoji-game'>Emoji Game</Link>
        <Link to='/counter-app'>Counter App</Link>
      </header>
    </div>
  );
}
export default App;
