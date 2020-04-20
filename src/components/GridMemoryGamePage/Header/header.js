import React from 'react';
import {observer} from 'mobx-react';

import {TopLevelComponent,LevelAndTheme,HeaderComponent,LevelComponent,Button} from './index.js';

@observer
class Header extends React.Component{
    
    onChangeSelectedTheme=()=>{
        const {onChangeSelectedTheme,selectedTheme}=this.props;
        onChangeSelectedTheme(selectedTheme);
    }
    
    render(){
        const {level,topLevel,selectedTheme}=this.props;
        return(
            <HeaderComponent>
                <TopLevelComponent>Top Level: {topLevel}</TopLevelComponent>
                <LevelAndTheme>
                    <LevelComponent>Level: {level}</LevelComponent>
                    <Button theme={selectedTheme} onClick={this.onChangeSelectedTheme}>Mode: {selectedTheme}</Button>
                </LevelAndTheme>
            </HeaderComponent>
            );
    }
}

export default Header;