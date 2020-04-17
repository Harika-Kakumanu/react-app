import React from 'react';
import {inject,observer} from 'mobx-react';
import {data} from '../../../stores/gridData';
import gameStore from '../../../stores/GameStore/gameStore'

import Cell from '../Cell/gridCell';

import {GameFieldComponent} from './index.js'

@observer
class GameField extends React.Component{
   
   renderCells=()=>{
       const {cells,onCellClick,level}=this.props;
       const getCells=cells;
       return getCells.map((eachCell,index)=>{
          return <Cell level={level} cell={eachCell} key={index} selectedTheme='dark'
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