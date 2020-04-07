import React from 'react';
import {NavBarComponent,ScoresComponent} from './navBarIndex.js'

class NavBar extends React.Component{
    render(){
        const {score,topScore,selectedTheme,onChageTheme}=this.props;
        return(
            <NavBarComponent>
              <h1>Emoji Game</h1>
              <ScoresComponent>
                 <p><strong>Score:{score}</strong></p>
                 <p><strong>TopScore:{topScore}</strong> </p>
                 <button onClick={onChageTheme}>{selectedTheme}Theme</button> 
              </ScoresComponent>
            </NavBarComponent>
            )
    }
}
export {NavBar}