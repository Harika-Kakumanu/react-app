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
            this.shouldShowHiddenCells=false;
        },(level+3)*1000);
    }
    
    onCellClick=()=>{
        const {cell:{id},onCellClick}=this.props;
        const {isHidden}=this.props.cell
        if(isHidden){
            
        }
        onCellClick(id);
        
    }
    render(){
        const {cell,selectedTheme,level}=this.props
        const {isHidden}=this.props.cell;
        let width=(data[level].gridWidth/(level+3))-1;
        return(
            <CellComponent cellWidth={width} background={this.shouldShowHiddenCells&&isHidden?'green':'gray'} 
                           onClick={this.onCellClick}>{cell.id}</CellComponent>
            )
    }
}

export default Cell