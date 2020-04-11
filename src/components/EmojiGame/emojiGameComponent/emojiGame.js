import React from 'react';
import {NavBar} from '../NavBar/navBar.js';
import {HowToPlay} from '../HowToPlay/howToPlay.js';
import {EmojiCard} from '../EmojiCard/emojiCard.js';
import {WinOrLose} from '../WinOrLose/winOrLose.js';
import {EmojisCardList} from './index.js';

class EmojiGame extends React.Component{
        state={
            score:0,
            topScore:0,
            gameState:'PLAYING',
            emojis:[
               { id:1,isClicked:false ,name:'Exploding Head',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png'},
                { id:2,isClicked:false ,name:'Grinning Face With Face',
              image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png'},
                { id:3,isClicked:false ,name:'Smiling Face With Heart-Eyes',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png'},
                { id:4,isClicked:false ,name:'Smirking Face',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png'},
                { id:5,isClicked:false ,name:'Thinking Face',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png'},
                { id:6,isClicked:false ,name:'Winking Face',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png'},
                { id:7,isClicked:false ,name:'Grinning Face',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png'},
                { id:8,isClicked:false ,name:'Crying Face',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png'},
                { id:9,isClicked:false ,name:'Astonished Face',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png'},
                { id:10,isClicked:false ,name:'Face With Tears Of Joy',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png'},
                { id:11,isClicked:false ,name:'Star-Struck',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png'},
                { id:12,isClicked:false ,name:'Winking Face With Tongue',
               image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png'},
               
                ],
        }
        
        renderEmojis=()=>{
            const {emojis}=this.state;
            const {selectedTheme}=this.props;
            let emojiList=emojis.map((eachEmoji)=>
                <EmojiCard key={eachEmoji.id} emoji={eachEmoji} onEmojiClick={this.onEmojiClick} selectedTheme= {selectedTheme}></EmojiCard>
            );
            return emojiList;
        }
        
        onEmojiClick=(emoji)=>{
             const {emojis,score}=this.state;
             let emojisIndex=emojis.indexOf(emoji)
                
            if(emoji.isClicked)
            {
                if(score===12){
                    this.setState({
                        gameState:'WON',
                    })
                }
                else{
                    this.setState({
                        gameState:'LOSS',
                    })
                }
                
            }
            else
            {
                emojis[emojisIndex].isClicked=true;
                 this.incrementScore();
                  this.shuffleEmojis(emojis);
            }
        }
        
        shuffleEmojis=(emojis)=>{
            let i,j,temp;
              for (i = emojis.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = emojis[i];
        emojis[i] = emojis[j];
        emojis[j] = temp;
        }
         return emojis;    
        }
    
    
        incrementScore=()=>{
            const {score}=this.state
            this.setState({
                score:score+1,
            })
        }
        
        
        onPlayAgainClick=()=>{
            this.setTopScore()
            this.resetGame()
        }
        
        
        resetGame=()=>{
            const {emojis} =this.state

            let emojisList=emojis.map((eachEmoji)=>{
                eachEmoji.isClicked=false;
                return eachEmoji;
            })
           this.setState({
               score:0,gameState:'PLAYING',emojis:emojisList
           }) 
    
        }
        
        
        setTopScore=()=>{
            const {score,topScore}=this.state
            if(topScore<score){
                this.setState({
                    topScore:score
                })
            }
        }
        
    
    render(){
        
        const{score,topScore,gameState}=this.state
        const {selectedTheme,onChangeTheme}=this.props
       
        return(
            <div>
              <NavBar score={score} topScore={topScore} 
              onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}></NavBar>
              {(gameState === 'PLAYING')?  <EmojisCardList>{this.renderEmojis()} </EmojisCardList>:
              <WinOrLose score={score} isWon={gameState} onPlayAgainClick={this.onPlayAgainClick} selectedTheme={selectedTheme}></WinOrLose>}
              <HowToPlay selectedTheme={selectedTheme}></HowToPlay>
            </div>
            )
    }

}export {EmojiGame}