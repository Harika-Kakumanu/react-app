import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from './components/country/CountryDashboard.js'
import CountryDetails from './components/country/countryDetails.js'
// import './components/country/countrystyle.css'
import "./App.css";

import {EmojiGame} from './components/EmojiGame/emojiGameComponent/emojiGame.js' 



class App extends React.Component{
  state={
    selectedTheme:'Light'
  }
  onChangeTheme=()=>{
    let changeTheme=this.state.selectedTheme==='Light'?'Dark':'Light'
    this.setState({
      selectedTheme:changeTheme,
    })
  }

render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        
          <Route exact path="/country-dashboard-app">
            <CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          
        <Route exact path="/country-dashboard-app/details/:alpha3Code" >
          <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
        </Route>
        
        <Route exact path="/emoji-game">
          <EmojiGame />
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
