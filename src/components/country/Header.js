import React from 'react';
import './countrystyle.css';
import { FiMoon } from "react-icons/fi";
import {HeaderStyle,H3Tag,Mode} from './countryStyle.js';


class Header extends React.Component{
    render(){
        return(
            <HeaderStyle>
            <H3Tag>Where in the world?</H3Tag>
            <Mode  onClick={this.props.onChangeTheme}>
               <FiMoon/> {this.props.selectedTheme}Mode
            </Mode>
            </HeaderStyle>
            )
    }
}
export{Header}