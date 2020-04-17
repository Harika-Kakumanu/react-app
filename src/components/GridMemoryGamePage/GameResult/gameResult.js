import React from 'react';

class GameResult extends React.Component{
    render(){
        const {level,selectedTheme,onPlayAgainClick}=this.props;
        return(
            <div>
                <p>{level}</p>
                <p>Congratulations!You completed all the levels</p>
                <button onClick={onPlayAgainClick}>Play Again</button>
            </div>
            );
    }
}

export default GameResult;