import React from 'react'
import {observable,action} from 'mobx';
import GridModel from '../models/GridModel/gridModel';
import {data} from '../../stores/gridData';

class GameStore{
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    cells=[]
    
    constructor(props){
        this.level=0;
        this.topLevel=0;
        this.selectedCellsCount='';
        this.setGridCells();
    }
    
 
    setGridCells=()=>{
        this.cells=[];
        for(let i=0;i<Math.pow(this.level+3,2);i++){
            const cellObject={
                id:Math.random().toString(),
                isHidden:false,
            };
            const gridModel=new GridModel(cellObject);
            this.cells.push(gridModel);
            
        }
       const tempCells=[...this.cells];
        for(let i = tempCells.length - 1; i > 0; i--){
         const j = Math.floor(Math.random() * i);
         const temp = tempCells[i];
         tempCells[i] = tempCells[j];
         tempCells[j] = temp;
        }
        this.currentLevelGridCells=tempCells.slice(0,this.level+3);
        this.currentLevelGridCells.forEach(each=>{
            each.isHidden=true;
        })
    }
    
        
    onCellClick=()=>{
        this.cells.forEach(each=>{
            if(each.id===this.currentLevelGridCells.id&& each.isHidden===true){
                this.incrementSelectedCellsCount;
                console.log('cliked')
            }
            else
            {
                this.goToInitialLevelAndUpdateCells
            }
        });
        
    }
   
    
    goToNextLevelAndUpdateCells=()=>{
        this.level++;
        this.resetSelectedCellsCount();
        
    }
    
    goToInitialLevelAndUpdateCells=()=>{
        this.setTopLevel();
        this.level=0;
        this.resetSelectedCellsCount();
    }
    
    resetSelectedCellsCount=()=>{
        this.selectedCellsCount=0
    }
    
    incrementSelectedCellsCount=()=>{
        this.selectedCellsCount++;
    }
    
    onPlayAgainClick=()=>{
        this.goToInitialLevelAndUpdateCells();
    }
    
    resetGame=()=>{
        this.level=0;
        this.resetSelectedCellsCount();
    }
    
    setTopLevel=()=>{
        if(this.level>this.topScore){
            this.topScore=this.level;
        }

         
    }
}

const gameStore = new GameStore();

export default gameStore;