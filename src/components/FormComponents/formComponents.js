import React from 'react';
import {Greetings} from './Greetings.js';
import {FavouriteDessert} from './FavouriteDessert.js'
import {VisitedCities} from './VisitedCities.js'
import {YourState} from './YourState.js'
import {DisableButton} from './DisableButton.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class FormComponents extends React.Component{
 constructor(props){
  super(props);
  this.state={
   dessertList:["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"],
   stateList:["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"],
   cityList: ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"],
  }
 }
    render(){ 
        return (
            <Router>
            <div>
            <nav>
            <ul>
            <li>
           <Link to="/formComponents/Greetings">Greetings</Link>
            </li>
            
             <li>
           <Link to="/formComponents/FavouriteDessert">Favourite Dessert</Link>
            </li>
            
             <li>
           <Link to="/formComponents/VisitedCities">Visited Cities</Link>
            </li>
            
             <li>
           <Link to="/formComponents/YourState">Your State</Link>
            </li>
            
             <li>
           <Link to="/formComponents/DisableButton">Disable Button</Link>
            </li>
            </ul>
            </nav>
            <Switch>
             <Route path="/formComponents/Greetings">
                 <Greetings/>
             </Route>
             
             <Route path='/formComponents/FavouriteDessert'>
                   <FavouriteDessert  dessertList={this.state.dessertList}/>
             </Route>
             
             <Route path='/formComponents/VisitedCities'>
                    <VisitedCities cityList={this.state.cityList}/>
             </Route>
             
              <Route path='/formComponents/YourState'>
                     <YourState stateList={this.state.stateList}/>
             </Route>
             
            <Route path='/formComponents/DisableButton'>
                  <DisableButton/>
             </Route>
             
            </Switch>
            </div>
            </Router>
            )
}
}
export {FormComponents};