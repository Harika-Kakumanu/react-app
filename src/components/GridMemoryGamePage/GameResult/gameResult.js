import React from 'react';
import {GameResultComponent,GreetingsComponent,GameResultLevel,Button} from './index.js'

class GameResult extends React.Component{
    render(){
        const {level,selectedTheme,onPlayAgainClick}=this.props;
        return(
            <GameResultComponent>
                <GameResultLevel>{level}</GameResultLevel>
                <GreetingsComponent>Congratulations!You completed all the levels</GreetingsComponent>
                <Button onClick={onPlayAgainClick}>Play Again</Button>
            </GameResultComponent>
            );
    }
}

export default GameResult;