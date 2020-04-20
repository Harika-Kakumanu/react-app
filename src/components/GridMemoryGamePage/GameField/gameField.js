import React from 'react';
import {observer} from 'mobx-react';

import gridThemeStore from '../../../stores/ThemeStore/GridThemeStore/gridThemeStore';
import {data} from '../../../stores/gridData';

import Cell from '../Cell/gridCell';

import {GameFieldComponent} from './index.js'

@observer
class GameField extends React.Component{
   renderCells=()=>{
       const {cells,onCellClick,level}=this.props;
       const getCells=cells;
       const {selectedTheme}=gridThemeStore;
       
       return getCells.map((eachCell)=>{
          return <Cell level={level} cell={eachCell} key={Math.random()} selectedTheme={selectedTheme}
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