import React from 'react'
import {observable} from 'mobx';


class GridThemeStore{
    @observable selectedTheme
    constructor(){
        this.selectedTheme='Dark';
    }
    onChangeSelectedTheme=()=>{
        if(this.selectedTheme==='Dark'){
            this.selectedTheme='Light';
        }
        else{
            this.selectedTheme='Dark';
        }
    }
    
}
const gridThemeStore = new GridThemeStore();

export default gridThemeStore;