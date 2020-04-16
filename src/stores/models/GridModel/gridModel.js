import React from 'react';
import {observable} from 'mobx';

class GridModel {
    id
    @observable isHidden;
    
    constructor(cellObject){
        this.id=cellObject.id;
        this.isHidden=cellObject.isHidden;
    }
}
export default GridModel