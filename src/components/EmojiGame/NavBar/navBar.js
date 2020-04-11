import React from 'react';
import {NavBarComponent,ScoresComponent,Button} from './navBarIndex.js'

class NavBar extends React.Component{
    render(){
        const {score,topScore,onChangeTheme,selectedTheme}=this.props;
        console.log(selectedTheme);
        return(
            <NavBarComponent>
              <h1>Emoji Game</h1>
              <ScoresComponent>
                 <p><strong>Score:{score}</strong></p>
                 <p><strong>TopScore:{topScore}</strong> </p>
                 <Button onClick={onChangeTheme} selectedTheme={selectedTheme}>{selectedTheme.displayText}Theme</Button> 
              </ScoresComponent>
            </NavBarComponent>
            )
    }
}
export {NavBar}