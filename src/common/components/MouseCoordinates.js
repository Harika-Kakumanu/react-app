import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class MouseCoordinates extends React.Component{
    
     @observable x_axis=0;
    @observable y_axis=0;
    
    @action.bound
    onMouseMoveChange(event){
        this.x_axis=event.clientX;
        this.y_axis=event.clientY;
    }
    render(){
        return(
           <div>{this.props.render(this.x_axis,this.y_axis,this.onMouseMoveChange)}</div>
            );
    }
}

export {MouseCoordinates};