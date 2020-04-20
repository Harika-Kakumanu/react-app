import React from 'react';
import {observer} from 'mobx-react';

import gridThemeStore from '../../../stores/ThemeStore/GridThemeStore/gridThemeStore';
import gameStore from '../../../stores/GameStore/gameStore';

import GameResult from '../GameResult/gameResult';
import Header from '../Header/header';
import GameField from '../GameField/gameField';

import {GridMemoryGameComponent} from './index.js';

@observer
class GridMemoryGame extends React.Component{
    
    render(){
        const {level,topLevel,isGameCompleted,cells,onCellClick,onPlayAgainClick}=gameStore;
        const {selectedTheme,onChangeSelectedTheme}=gridThemeStore;
        return(
            <GridMemoryGameComponent theme={selectedTheme}>
                <Header topLevel={topLevel} selectedTheme={selectedTheme} 
                onChangeSelectedTheme={onChangeSelectedTheme} level={level} /> 
                {isGameCompleted===false?
                <GameField  cells={cells} onCellClick={onCellClick} level={level}/>
                :<GameResult level={level} selectedTheme={selectedTheme} 
                onPlayAgainClick={onPlayAgainClick}/>}
            </GridMemoryGameComponent>
            
            )
    }
}

export default GridMemoryGame