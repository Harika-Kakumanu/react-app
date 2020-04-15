import React from 'react'
import {observable,action} from 'mobx';



class GameStore{
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    
    constructor(props){
        this.level=0;
        this.topLevel=0;
    }
    
    
    onCellClick=()=>{
        
    }
    
    setGridCells=()=>{
        
    }
    
    goToNextLevelAndUpdateCells=()=>{
        
    }
    
    goToInitialLevelAndUpdateCells=()=>{
        
    }
    
    resetSelectedCellsCount=()=>{
        
    }
    
    incrementSelectedCellsCount=()=>{
        
    }
    
    onPlayAgainClick=()=>{
        
    }
    
    resetGame=()=>{
        
    }
    
    setTopLevel=()=>{
        
    }
}

const gameStore = new GameStore();

export default gameStore;