import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
 import gameStore from '../../../stores/GameStore/gameStore'
 import {data} from '../../../stores/gridData';
import {CellComponent} from './index.js'
import './index.css'

@observer
class Cell extends React.Component{
    
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    @ observable disabled
    timer='';
    
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
    }
    
    @action.bound
    componentDidMount(){
        const {level}=this.props;
        this.timer=setTimeout(()=>{
            this.shouldShowHiddenCells=false
        },(level+3)*1000);
    }
    
    onCellClick=()=>{
        const {cell:{id},onCellClick}=this.props;
        console.log(this.disabled)
        const {isHidden}=this.props.cell
        onCellClick(id);
        
    }
    render(){
        const {cell,selectedTheme,level}=this.props
        const {isHidden}=this.props.cell;
        let width=(data[level].gridWidth/(level+3))-4;
         console.log(this.disabled)
        return(
            <CellComponent cellWidth={width} 
            disabled={ this.shouldShowHiddenCells}
            background={this.shouldShowHiddenCells&&isHidden?'green':'gray'} 
                           onClick={this.onCellClick}></CellComponent>
            )
    }
}

export default Cell