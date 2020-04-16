import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
 import gameStore from '../../../stores/GameStore/gameStore'
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
        const {id,onCellClick}=this.props;
        this.isClickedOnCell=true;
        console.log('in cell component',this.isClickedOnCell)
        onCellClick(id);
    }
    render(){
        const {cell,onCellClick,selectedTheme}=this.props
        const {isHidden}=this.props.cell;
        return(
            <CellComponent background={this.shouldShowHiddenCells&&isHidden?'green':'gray'} 
                           onClick={this.onCellClick}></CellComponent>
            )
    }
}

export default Cell