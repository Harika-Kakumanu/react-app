import React from 'react';

import {EmojiCardComponent,EmojiName} from './emojiCardIndex.js';

class EmojiCard extends React.Component{
    onEmojiClick=()=>{
        const {onEmojiClick,emoji}=this.props;
        onEmojiClick(emoji);
    }
    render(){
        const {emoji,selectedTheme}=this.props
       
        return(
            <EmojiCardComponent selectedTheme={selectedTheme} onClick={this.onEmojiClick}>
                <img src={emoji.image} alt=''/>
                <EmojiName>{emoji.name}</EmojiName>
            </EmojiCardComponent>
            )
    }
}

export {EmojiCard}