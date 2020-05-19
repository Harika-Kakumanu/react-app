import React from 'react';
import {observer} from 'mobx-react';
import ViewEditToggle from '../components/ViewEditToggle.js';
import CollapseExpand from '../components/CollapseExpand.js';
import DeviceTypeText from '../components/DeviceTypeText.js';
import {MouseCoordinates} from '../components/MouseCoordinates.js';
import DisplayMouseCoordinates from '../components/DisplayMouseCoordinates.js';
import {MainContainer,TitleComponent} from '../components/styledComponents.js';

@observer
class PracticeAdvancedConceptsRoute extends React.Component{
    render(){
        return(
            <MainContainer>
                <TitleComponent>HOC's Usage</TitleComponent>
            <ViewEditToggle/>
            <CollapseExpand/>
            <DeviceTypeText/>
                <TitleComponent>Render Props Usage</TitleComponent>
            <MouseCoordinates 
                render={
                   ( x_axis, y_axis,onMouseMoveChange)=>(
                        <DisplayMouseCoordinates
                            x_axis={x_axis} 
                            y_axis={y_axis} 
                            onMouseMoveChange={onMouseMoveChange}
                        />
                    )
                }
                
            />
            </MainContainer>
        );
    }
}

export {PracticeAdvancedConceptsRoute};