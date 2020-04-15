import React from "react";

import {observer} from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from './components/country/CountryDashboard'
import CountryDetails from './components/country/countryDetails'
import {EmojiGame} from './components/EmojiGame/emojiGameComponent/emojiGame' 
import {CounterApp} from './components/CounterApp/counterApp';
import {TodoApp} from './components/TodoApp/TodoAppComponent/todoApp'
import GridMemoryGame from './components/GridMemoryGamePage/GridMemoryGame/gridMemoryGame'
import themeStore from './stores/ThemeStore'
import "./App.css";


// import {configure} from 'mobx'



// configure({enforceActions:true})
@observer
class App extends React.Component{
  
  getCurrentTheme=()=>{
    return themeStore.selectedTheme
  }
  
  setCurrentTheme=(theme)=>{
    themeStore.setCurrentTheme(theme)
  }
  
  themeOptions={
    LIGHT:{
      id:'0',
      name:'#fff',
      displayText:'Dark',
      background:'#ebf8ff',
      cardColor:'white',
      textColor:'black',
      green:'green',
      red:'red',
      
    },
    
    DARK:{
      id:'1',
      name:'#2b3945',
      displayText:'Light',
      background:'black',
      cardColor:'#2b6cb0',
      textColor:'white',
      green:'green',
      red:'red',
    }
  }
  
  
  onChangeTheme=()=>{
    let background = this.getCurrentTheme() === 'LIGHT' ? 'DARK' : 'LIGHT';
    this.setCurrentTheme(background)
    // if(this.getCurrentTheme() === 'Light'){
    //   this.setCurrentTheme('Dark')
    // }
    // else
    // {
    // this.setCurrentTheme('Light') 
    // }
  }

render(){
  //console.log(selectedTheme)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        
        <Route exact path="/page-1">
          <Page1/>
        </Route>
        
        
         <Route exact path="/grid-game">
          <GridMemoryGame/>
        </Route>
        
     
         <Route exact path="/mobx-todo-app">
          <TodoApp/>
        </Route>
        
          <Route exact path="/country-dashboard-app">
            <CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          
        <Route exact path="/country-dashboard-app/details/:alpha3Code" >
          <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
        </Route>
        
        <Route exact path="/emoji-game">
          <EmojiGame onChangeTheme={this.onChangeTheme} selectedTheme={this.themeOptions[this.getCurrentTheme()]}/>
        </Route>
        
        <Route exact path='/counter-app'>
          <CounterApp/>
        </Route>
        
        <Route path='/'>
        <HomePage/>
        </Route>
        
      </Switch>
    </Router>
  );
};
}

export default App;
