import React from 'react';
import {Provider} from 'mobx-react';
import gameStore from '../../../stores/GameStore/gameStore';


import Header from '../Header/header';
import GameField from '../GameField/gameField';


import {GridMemoryGameComponent} from './index.js';

class GridMemoryGame extends React.Component{
    
    
    render(){
        return(
            <Provider selectedTheme='' cells={gameStore.cells} onCellClick={gameStore.onCellClick} level={gameStore.level} topLevel={gameStore.topLevel} onChangeSelectedTheme=''>
            <GridMemoryGameComponent>
                <Header/> 
                <GameField />
            </GridMemoryGameComponent>
            </Provider>
            )
    }
}

export default GridMemoryGame