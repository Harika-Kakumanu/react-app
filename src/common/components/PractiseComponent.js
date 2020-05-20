import React from 'react';
import {observable} from 'mobx';
import {withPractise} from '../hocs/PractiseHocs/withPractise.js';

class PractiseComponent extends React.Component{
    @observable data=
    "Events that occur when the mouse interacts with the HTMLdocument belongs to the MouseEvent Object HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.Events are normally used in combination with functions, and the function will not be executed beforethe event occurs (such as when a user clicks a button)"

    render(){
        return(
            <div></div>
            );
    }
}
export default withPractise(PractiseComponent);