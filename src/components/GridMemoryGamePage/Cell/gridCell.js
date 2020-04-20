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
    intialCellApperance
    againCallingCells
    gridColor='';
    wrongClickTimer
    
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
    }
    
    componentDidMount=()=>{
        const {level}=this.props;
        this.intialCellApperance=setTimeout(()=>{
            this.shouldShowHiddenCells=false;
            this.againCallingCells=setTimeout(()=>{
                  gameStore.goToInitialLevelAndUpdateCells();
                this.shouldShowHiddenCells=true;
            },(level+3)*2000);
        },(level+3)*1000);
    }
    
    componentWillUnmount=()=>{
        clearTimeout(this.intialCellApperance);
        clearTimeout(this.againCallingCells);
        clearTimeout(this.wrongClickTimer)
    }
    
    onCellClick=()=>{
        const {cell:{id},onCellClick}=this.props;
        this.isClickedOnCell=true;
        this.wrongClickTimer=setTimeout(()=>{
            onCellClick(id);
        },100);
    }
   
   
    eachCellColor=()=>{
        const {selectedTheme}=this.props;
         const {isHidden}=this.props.cell;
        if(isHidden && (this.isClickedOnCell||this.shouldShowHiddenCells)){
            this.gridColor=selectedTheme==='light'?'green':'#4fb1c5';
        }
        else if(!isHidden&&this.isClickedOnCell){
            this.gridColor='red';
        }
        else{
            this.gridColor=selectedTheme==='light'?'#294264':'#2c5282';
        }
    }
    
    render(){
        this.eachCellColor();
        const {level}=this.props
        let width=(data[level].gridWidth/(level+3))-4;
        return(
            <CellComponent gridColor={this.gridColor} cellWidth={width} 
            disabled={ this.shouldShowHiddenCells}
                onClick={this.onCellClick}></CellComponent>
            )
    }
}

export default Cell