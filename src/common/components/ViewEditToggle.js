import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import {MainContainer,TitleComponent} from './styledComponents.js';
import {withToggle} from '../hocs/ToggleHocs/withToggle.js';

@observer
class ViewEditToggle extends React.Component{
    @observable inputData='Click the Edit button to start Editing';
    
    @action.bound
    onChangeData(event){
        this.inputData=event.target.value;
    }
    
    render(){
        const {toggleStatus,onToggle}=this.props;
        return(
            <MainContainer>
                <TitleComponent>ViewEditToggle</TitleComponent>
                {!toggleStatus?
                    <div>
                    <p>{this.inputData}</p>
                    <button onClick={onToggle}>Edit</button>
                </div>
                :
                 <div>
                     <input type='text' value={this.inputData} onChange={this.onChangeData}/>
                     <button onClick={onToggle}>Cancel</button>
                    </div>
                }
            </MainContainer>
            );
    }
}

export default withToggle(ViewEditToggle);