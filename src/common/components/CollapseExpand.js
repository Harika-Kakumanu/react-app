import React from 'react';
import {withToggle} from '../hocs/ToggleHocs/withToggle.js';
import {MainContainer,TitleComponent} from './styledComponents.js';

class CollapseExpand extends React.Component{
    
    render(){
        const {onToggle,toggleStatus}=this.props;
        return(
            <MainContainer>
               <TitleComponent> Collapse Expand</TitleComponent>
               <label>Sample shoppinglist: </label>
                    {!toggleStatus?
                        <button onClick={onToggle}>Expand</button>
                        :
                        <div>
                        <button onClick={onToggle}>Collapse</button>
                        <ul>
                            <li>Eggs</li>
                            <li>Bread</li>
                        </ul>
                        </div>
                    }
                  
            </MainContainer>
            );
    }
}

export default withToggle(CollapseExpand);