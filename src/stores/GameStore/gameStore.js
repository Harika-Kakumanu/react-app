
import React from 'react'
import {observable} from 'mobx';

import {data} from '../../stores/gridData';

import GridModel from '../models/GridModel/gridModel';

class GameStore{
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    @observable cells=[];
    
    constructor(props){
        this.level=0;
        this.topLevel=0;
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.setGridCells();
        this.cells;
    }
 
    setGridCells=()=>{
        this.cells=[];
        this.isGameCompleted=false;
        for(let i=0;i<Math.pow(this.level+3,2);i++){
            const cellObject={
                id:Math.random(),
                isHidden:false,
                isClicked:false
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
        });
    }
    
    onCellClick=(cellId)=>{
       let clickedCellIndex=this.currentLevelGridCells.findIndex(cell=>cell.id===cellId);
       if(clickedCellIndex!==-1)
       { 
          let clickedCell=this.currentLevelGridCells[clickedCellIndex]; 
           if(clickedCell.isHidden)
           {
                if(clickedCell.isClicked===false)
                {
                    clickedCell.isClicked=true;
                    this.incrementSelectedCellsCount();
                }
                if(data.length===this.level){
                    this.isGameCompleted=true;
                }
            }
           else{
            this.goToInitialLevelAndUpdateCells();
            }
        }
         else{
            this.goToInitialLevelAndUpdateCells();
        }
    }
    
    goToNextLevelAndUpdateCells=()=>{
        if(this.level<7){
         this.level++;
        }
        this.setGridCells();
        this.resetSelectedCellsCount();
    }
    
    goToInitialLevelAndUpdateCells=()=>{
        this.setTopLevel();
        this.level=0;
        this.setGridCells();
        this.resetSelectedCellsCount();
    }
    
    resetSelectedCellsCount=()=>{
        this.selectedCellsCount=0;
    }
    
    incrementSelectedCellsCount=()=>{
        this.selectedCellsCount++;
        if(this.selectedCellsCount===this.level+3){
            this.resetSelectedCellsCount();
            this.goToNextLevelAndUpdateCells();
        }
    }
    
    onPlayAgainClick=()=>{
        this.goToInitialLevelAndUpdateCells();
    }
    
    resetGame=()=>{
        this.level=0;
        this.goToInitialLevelAndUpdateCells();
    }
    
    setTopLevel=()=>{
        if(this.level>this.topLevel){
            this.topLevel=this.level;
        }
    }
}

const gameStore = new GameStore();

export default gameStore;
