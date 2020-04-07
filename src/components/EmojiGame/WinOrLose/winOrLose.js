import React from 'react';
import {WinOrLoseComponent,ScoreComponent,GameStateComponent,PlayAgainButton} from './index.js'

class WinOrLose extends React.Component{
    render(){
        const {gameState,score}=this.props
        return(
            <WinOrLoseComponent>
                <ScoreComponent>{score}</ScoreComponent>
                <GameStateComponent>{gameState}</GameStateComponent>
                <PlayAgainButton>Play Again</PlayAgainButton>
            </WinOrLoseComponent>
        )
    }
}

export {WinOrLose}