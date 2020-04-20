import React from 'react';
import {observer} from 'mobx-react';
import {data} from '../../../stores/gridData';
import gameStore from '../../../stores/GameStore/gameStore'

import Cell from '../Cell/gridCell';

import {GameFieldComponent} from './index.js'

@observer
class GameField extends React.Component{
    count=0;
   renderCells=()=>{
       const {cells,onCellClick,level}=this.props;
       const getCells=cells;
       return getCells.map((eachCell)=>{
          return <Cell level={level} cell={eachCell} key={Math.random()} selectedTheme='dark'
                        onCellClick={onCellClick} id={eachCell.id}/>
       })
   }
    render(){
        const {level}=this.props
        return(
            <GameFieldComponent width={data[level]}>
                    {this.renderCells()}
            </GameFieldComponent>
            )
    }
}

export default GameField