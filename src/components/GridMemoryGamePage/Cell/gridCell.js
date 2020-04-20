import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import gameStore from '../../../stores/GameStore/gameStore';
import {data} from '../../../stores/gridData';
import {CellComponent} from './index.js'
import './index.css'

@observer
class Cell extends React.Component{
    
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    timer
    timer2
    gridColor='';
    timer3
    
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
    }
    
    
    componentDidMount=()=>{
        const {level}=this.props;
        this.timer=setTimeout(()=>{
            this.shouldShowHiddenCells=false
            this.timer2=setTimeout(()=>{
                  gameStore.goToInitialLevelAndUpdateCells();
                this.shouldShowHiddenCells=true;
              
            },(level+3)*2000);
        },(level+3)*1000);
    }
    
    componentWillUnmount=()=>{
        clearTimeout(this.timer);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3)
    }
    
    @action
    onCellClick=()=>{
        const {cell:{id},onCellClick}=this.props;
        const {isHidden}=this.props.cell
          
        this.isClickedOnCell=true;
        console.log('n cell click',this.isClickedOnCell)
        this.timer3=setTimeout(()=>{
            onCellClick(id);
        },100)
        
    }
   
   @action 
    eachCellColor=()=>{
        const {selectedTheme}=this.props;
         const {isHidden}=this.props.cell
      
        if(isHidden && (this.isClickedOnCell||this.shouldShowHiddenCells)){
             console.log('click sell',this.isClickedOnCell)
            this.gridColor=selectedTheme==='light'?'green':'#4fb1c5'
        }
        else if(!isHidden&&this.isClickedOnCell){
            this.gridColor='red';
        }
        else{
            this.gridColor=selectedTheme==='light'?'gray':'#4a5568';
        }
    }
    
    render(){
        this.eachCellColor();
        const {cell,selectedTheme,level}=this.props
        const {isHidden}=this.props.cell;
        let width=(data[level].gridWidth/(level+3))-4;
        return(
            <CellComponent gridColor={this.gridColor} cellWidth={width} 
            disabled={ this.shouldShowHiddenCells}
                onClick={this.onCellClick}></CellComponent>
            )
    }
}

export default Cell