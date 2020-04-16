import React from 'react';
import {inject} from 'mobx-react';
import {TopLevelComponent,LevelAndTheme,HeaderComponent,Button} from './index.js';

@inject('level','topLevel')
class Header extends React.Component{
    
    onChangeSelectedTheme=()=>{
        
    }
    
    
    render(){
        return(
            <HeaderComponent>
                <TopLevelComponent>Top Level {this.props.topLevel}</TopLevelComponent>
                <LevelAndTheme>
                    <p>Level {this.props.level}</p>
                    <Button >Mode: {}</Button>
                </LevelAndTheme>
            </HeaderComponent>
            )
    }
}

export default Header