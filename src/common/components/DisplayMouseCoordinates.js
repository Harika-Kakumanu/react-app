import React from 'react';
import {observer} from 'mobx-react';
import {MainContainer,TitleComponent} from './styledComponents.js';

@observer
class DisplayMouseCoordinates extends React.Component{
    render(){
       const {x_axis,y_axis,onMouseMoveChange}=this.props;
        return(
            <MainContainer onClick={onMouseMoveChange}>
                <TitleComponent>DisplayMouseCoordinates</TitleComponent>
                <p>The mouse position is ({x_axis},{y_axis})</p>
            </MainContainer>
            );
    }
}
export default DisplayMouseCoordinates;