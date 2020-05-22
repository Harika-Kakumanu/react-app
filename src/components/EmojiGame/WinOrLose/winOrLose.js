import React from 'react';
import {WinOrLoseComponent,ScoreComponent,GameStateComponent,PlayAgainButton} from './index.js'

class WinOrLose extends React.Component{
    render(){
        const {isWon,score,selectedTheme,onPlayAgainClick}=this.props
        return(
            <WinOrLoseComponent selectedTheme={selectedTheme}>
                <ScoreComponent>{score}</ScoreComponent>
                <GameStateComponent>{isWon}</GameStateComponent>
                <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
            </WinOrLoseComponent>
        )
    }
}

export {WinOrLose}

// import React from 'react';
// import {WinOrLoseComponent,ScoreComponent,GameStateComponent,PlayAgainButton} from './index.js'

// class WinOrLose extends React.Component{
//     render(){
//         const {isWon,score,selectedTheme,onPlayAgainClick}=this.props
//         return(
//             <WinOrLoseComponent selectedTheme={selectedTheme}>
//                 <ScoreComponent>{score}</ScoreComponent>
//                 <GameStateComponent>{isWon}</GameStateComponent>
//                 <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
//             </WinOrLoseComponent>
//         )
//     }
// }

// export {WinOrLose}