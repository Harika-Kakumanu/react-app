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
        this.selectedCellsCount=0;
        this.setGridCells();
    }
 
    setGridCells=()=>{
        this.cells=[];
        for(let i=0;i<Math.pow(this.level+3,2);i++){
            const cellObject={
                id:Math.random().toString(),
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
        })
    }
    
    onCellClick=(cellId)=>{
       let clickedCellIndex=this.currentLevelGridCells.findIndex(cell=>cell.id===cellId);
       
        let clickedCell=this.currentLevelGridCells[clickedCellIndex];
        //let clickedCellIndex=this.cells.findIndex(cell=>cell.id===cellId);
        //let clickedCell=this.cells[clickedCellIndex];
        console.log(clickedCell);
        if(clickedCell.isHidden){
            if(clickedCell.isClicked===false){
                clickedCell.isClicked=true;
                this.incrementSelectedCellsCount();
            }
        }
        else{
            this.goToInitialLevelAndUpdateCells();
        }
    }
   
    
    goToNextLevelAndUpdateCells=()=>{
        this.level++;
        this.setGridCells();
    }
    
    goToInitialLevelAndUpdateCells=()=>{
        this.setTopLevel();
        this.level=0;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    
    resetSelectedCellsCount=()=>{
        this.selectedCellsCount=0
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
        this.goToInitialLevelAndUpdateCells();
    }
    
    setTopLevel=()=>{
        if(this.level>this.topScore){
            this.topScore=this.level;
        }
    }
}

const gameStore = new GameStore();

export default gameStore;


        // this.currentLevelGridCells.find(each=>{
        //     console.log(each.id,cellId)
        //     if(each.id===cellId){
        //         console.log(this.currentLevelGridCells.findIndex(each.id))
        //         this.incrementSelectedCellsCount();
        //         if(this.selectedCellsCount===this.level+3){
        //             //console.log('to increment',this.selectedCellsCount,this.level+3)
        //             this.goToNextLevelAndUpdateCells();
        //         }
        //         else{
        //             //console.log('to increment',this.selectedCellsCount,this.level+3)
        //             //console.log('wait');
        //         }
        //     }
        //     else
        //     {
        //         //this.goToInitialLevelAndUpdateCells();
        //     }
        // });
     
     
    //  console.aws.amazon.com/cloud9/ide/fa4adb425f5d4219868801888d5662a0
    //https://tap.ibhubs.in/react/assignments/assignment-9/