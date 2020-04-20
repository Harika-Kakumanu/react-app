

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






























// import React from 'react'
// import {observable} from 'mobx';

// import {data} from '../../stores/gridData';

// import GridModel from '../models/GridModel/gridModel';

// class GameStore{
//     @observable level;
//     @observable topLevel;
//     @observable currentLevelGridCells;
//     @observable selectedCellsCount;
//     @observable isGameCompleted;
//     @observable cells;
    
//     constructor(props){
//         this.level=0;
//         this.topLevel=0;
//         this.selectedCellsCount=0;
//         this.isGameCompleted=false;
//         this.setGridCells();
//         this.cells=[];
//     }
 
//     setGridCells=()=>{
        
//         this.cells=[];
//         this.isGameCompleted=false;
//         for(let i=0;i<Math.pow(this.level+3,2);i++){
//             const cellObject={
//                 id:i,
//                 isHidden:false,
//                 isClicked:false
//             };
//             const gridModel=new GridModel(cellObject);
//             this.cells.push(gridModel);
//         }
       
//       const tempCells=[...this.cells];
//         for(let i = tempCells.length - 1; i > 0; i--){
//          const j = Math.floor(Math.random() * i);
//          const temp = tempCells[i];
//          tempCells[i] = tempCells[j];
//          tempCells[j] = temp;
//         }
//         this.currentLevelGridCells=tempCells.slice(0,this.level+3);
//         this.currentLevelGridCells.forEach(each=>{
//             each.isHidden=true;
//         });
//     }
    
//     onCellClick=(cellId)=>{
//          console.log('hiii');
//         a
//       let clickedCellIndex=this.currentLevelGridCells.findIndex(cell=>cell.id===cellId);
//       if(clickedCellIndex!==-1)
//       {
//           let clickedCell=this.currentLevelGridCells[clickedCellIndex]; 
//           if(clickedCell.isHidden)
//           {
//                 if(clickedCell.isClicked===false)
//                 {
//                     clickedCell.isClicked=true;
//                     this.incrementSelectedCellsCount();
//                 }
//                 if(data.length===this.level){
//                     this.isGameCompleted=true;
//                 }
//             }
//           else{
//             this.goToInitialLevelAndUpdateCells();
//             }
//         }
//     }
    
//     goToNextLevelAndUpdateCells=()=>{
//         if(this.level<1){
//         this.level++;
//         }
//         this.setGridCells();
//         this.resetSelectedCellsCount();
//     }
    
//     goToInitialLevelAndUpdateCells=()=>{
//         this.setTopLevel();
//         this.level=0;
//         this.setGridCells();
//         this.resetSelectedCellsCount();
//     }
    
//     resetSelectedCellsCount=()=>{
//         this.selectedCellsCount=0;
//     }
    
//     incrementSelectedCellsCount=()=>{
//         this.selectedCellsCount++;
//         if(this.selectedCellsCount===this.level+3){
//             this.resetSelectedCellsCount();
//             this.goToNextLevelAndUpdateCells();
//         }
//     }
    
//     onPlayAgainClick=()=>{
//         this.goToInitialLevelAndUpdateCells();
//     }
    
//     resetGame=()=>{
//         this.level=0;
//         this.goToInitialLevelAndUpdateCells();
//     }
    
//     setTopLevel=()=>{
//         if(this.level>this.topLevel){
//             this.topLevel=this.level;
//         }
//     }
// }

// const gameStore = new GameStore();
// export default gameStore;


//         // this.currentLevelGridCells.find(each=>{
//         //     console.log(each.id,cellId)
//         //     if(each.id===cellId){
//         //         console.log(this.currentLevelGridCells.findIndex(each.id))
//         //         this.incrementSelectedCellsCount();
//         //         if(this.selectedCellsCount===this.level+3){
//         //             //console.log('to increment',this.selectedCellsCount,this.level+3)
//         //             this.goToNextLevelAndUpdateCells();
//         //         }
//         //         else{
//         //             //console.log('to increment',this.selectedCellsCount,this.level+3)
//         //             //console.log('wait');
//         //         }
//         //     }
//         //     else
//         //     {
//         //         //this.goToInitialLevelAndUpdateCells();
//         //     }
//         // });
        
        
        
        
        
// //         - [ ] Timers wont be written in and need to write in the components
// // - [ ] use timers in componentdidmount and clear in the unmount.
// // - [ ] commented code in the files
// // - [ ] imported statements in the order
// // - [ ] need not intialize the values while writing the @observable
// //         - [ ] for eg:@observable count=0;(wrong)
// //         - [ ]          must be in the intialize constructor only
// // - [ ] use styled components 
// // - [ ] when using reactions must be disposed it
// // - [ ] top level updating when the user time out
// // - [ ] if(shouldEnable===true)(wrong way)
// // - [ ] must be import themestore at the parent component
// // - [ ] cell component does not need "sholudShowHiddenCells"
// // - [ ] if game json is not used ,then must be used computed functions

        
        
     
     
//     //  https://ap-southeast-1.console.aws.amazon.com/cloud9/ide/fa4adb425f5d4219868801888d5662a0
    
//     //https://tap.ibhubs.in/react/assignments/assignment-9/