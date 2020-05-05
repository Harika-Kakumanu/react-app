import React from "react";
import { Link,Redirect } from "react-router-dom";
import logo from "../../logo.svg";
import {ACCESS_TOKEN} from '../../utils/StorageUtils.js';

function App() {
  if(ACCESS_TOKEN===undefined){
      <Redirect to={{pathname:'/login-page'}}/>
  }
  else
  {
  
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
        
         <Link to='/sign-in-auth'>Auth SignIn</Link>
        <Link to='/login-page'>LoginForm</Link>
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
}
export default App;
// <Link to='/sign-in-auth'>Auth SignIn</Link>