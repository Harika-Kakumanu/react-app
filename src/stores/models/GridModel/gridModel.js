import React from 'react';
import {observable} from 'mobx';

class GridModel {
    id
    @observable isHidden;
    @observable isClicked;
    
    constructor(cellObject){
        this.id=cellObject.id;
        this.isHidden=cellObject.isHidden;
        this.isClicked=cellObject.isClicked;
    }
}
export default GridModel