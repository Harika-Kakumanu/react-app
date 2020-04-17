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
        const {cell,id,onCellClick}=this.props;
         const {isHidden}=this.props.cell;
        //  console.log(cell);
        // if(cell.isHidden){
        //     this.isClickedOnCell=true;           
        // }
        
        onCellClick(id);
    }
    render(){
        const {cell,selectedTheme}=this.props
        const {isHidden}=this.props.cell;
        return(
            <CellComponent background={this.shouldShowHiddenCells&&isHidden?'green':'gray'} 
                           onClick={this.onCellClick}></CellComponent>
            )
    }
}

export default Cell