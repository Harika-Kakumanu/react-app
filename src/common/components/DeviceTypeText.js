import React from 'react';
import {withScreenSizeDetectors} from '../hocs/ScreenSizeDetector/withScreenSizeDetectors.js';
import {MainContainer,TitleComponent} from './styledComponents.js';

class DeviceTypeText extends React.Component{
    render(){
        const {isMobile,isTablet,isDesktop}=this.props;
        return(
            <MainContainer>
                <TitleComponent>DeviceType Text</TitleComponent>
                <span>Device Type is:
                {isMobile?'Mobile':(isTablet ?'Tablet':'Desktop')}
                </span>
            </MainContainer>
            );
    }
}

export default withScreenSizeDetectors(DeviceTypeText);