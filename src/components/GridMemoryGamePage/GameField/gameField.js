import React from 'react';
import {inject} from 'mobx-react';
import {data} from '../../../stores/gridData';
import gameStore from '../../../stores/GameStore/gameStore'

import Cell from '../Cell/gridCell';

import {GameFieldComponent} from './index.js'

@inject('level','topLevel','onCellClick','cells')
class GameField extends React.Component{
   
   renderCells=()=>{
       const {cells,onCellClick}=this.props;
       const getCells=cells;
       return getCells.map((eachCell,index)=>{
          return <Cell level={gameStore.level} cell={eachCell} key={index} selectedTheme='' onCellClick={onCellClick} id={gameStore.cells.id}/>
       })
   }
    render(){
        return(
            <GameFieldComponent>
                    {this.renderCells()}
            </GameFieldComponent>
            )
    }
}

export default GameField