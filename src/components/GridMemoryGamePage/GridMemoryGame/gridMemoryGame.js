import React from 'react';
import {Provider,observer} from 'mobx-react';
import gameStore from '../../../stores/GameStore/gameStore';
import gridThemeStore from '../../../stores/ThemeStore/GridThemeStore/gridThemeStore';

import Header from '../Header/header';
import GameField from '../GameField/gameField';

import {GridMemoryGameComponent} from './index.js';

@observer
class GridMemoryGame extends React.Component{
    
    
    render(){
        return(
            <GridMemoryGameComponent theme={gridThemeStore.selectedTheme}>
                <Header topLevel={gameStore.topLevel} selectedTheme={gridThemeStore.selectedTheme} 
                onChangeSelectedTheme={gridThemeStore.onChangeSelectedTheme} level={gameStore.level} /> 
                <GameField  cells={gameStore.cells} onCellClick={gameStore.onCellClick} level={gameStore.level}/>
            </GridMemoryGameComponent>
            
            )
    }
}

export default GridMemoryGame