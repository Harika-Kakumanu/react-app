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
    @observable cells=[]
    
    constructor(props){
        this.level=0;
        this.topLevel=0;
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.setGridCells();
    }
 
    setGridCells=()=>{
        this.cells=[];
        this.isGameCompleted=false;
        for(let i=0;i<Math.pow(this.level+3,2);i++){
            const cellObject={
                id:i,
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
                if(data.length-1===this.level){
                    //console.log(data.length)
                    this.isGameCompleted=true;
                    //this.onPlayAgainClick();
                }
            }
           else{
            this.goToInitialLevelAndUpdateCells();
            }
        }
    }
    
    goToNextLevelAndUpdateCells=()=>{
        this.level++;
        this.setGridCells();
        this.resetSelectedCellsCount();
    }
    
    goToInitialLevelAndUpdateCells=()=>{
        alert('1');
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
     
     
    //  https://ap-southeast-1.console.aws.amazon.com/cloud9/ide/fa4adb425f5d4219868801888d5662a0
    
    //https://tap.ibhubs.in/react/assignments/assignment-9/