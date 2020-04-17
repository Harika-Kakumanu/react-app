import React from 'react'
import {observable} from 'mobx';


class GridThemeStore{
    @observable selectedTheme='dark';
    onChangeSelectedTheme=()=>{
        if(this.selectedTheme==='dark'){
            this.selectedTheme='light'
        }
        else{
            this.selectedTheme='dark';
        }
    }
    
}
const gridThemeStore = new GridThemeStore();

export default gridThemeStore;