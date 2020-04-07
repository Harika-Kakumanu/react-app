import React from 'react';
import {HowToPlayComponent,HowToPlayText,HowToPlayContent} from './howToPlayIndex.js'

class HowToPlay extends React.Component{

    render(){
        const {selectedTheme}=this.props;
        return(
            <HowToPlayComponent>
               <HowToPlayText>How To Play?</HowToPlayText>
               <HowToPlayContent>Get points by clicking on an image but don't click on any image more than once!</HowToPlayContent>
            </HowToPlayComponent>
            )
    }
}

export {HowToPlay}