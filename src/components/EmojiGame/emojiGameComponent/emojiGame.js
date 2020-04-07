import React from 'react';
import {NavBar} from '../NavBar/navBar.js';
import {HowToPlay} from '../HowToPlay/howToPlay.js';
import {EmojiCard} from '../EmojiCard/emojiCard.js';
import {winOrLose} from '../WinOrLose/winOrLose.js';
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
            let emojiList=emojis.map((eachEmoji)=>
                <EmojiCard key={eachEmoji.id} emoji={eachEmoji} onEmojiClick={this.onEmojiClick} selectedTheme=''></EmojiCard>
            );
            return emojiList;
        }
        
        onEmojiClick=(emoji)=>{
            //console.log(`in emoji game ${emoji.id}`)
             const {emojis,score,gameState}=this.state;
             let emojisIndex=emojis.indexOf(emoji)
                
            if(emoji.isClicked)
            {
                this.setTopScore();
            }
            else
            {
                 this.incrementScore();
                
            }
          emojis[emojisIndex].isClicked=true;
            this.shuffleEmojis(emojis);
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
            
        }
        
        
        resetGame=()=>{
            
        }
        
        
        setTopScore=()=>{
            const {score,topScore,emojis,gameState}=this.state
            if(topScore<score){
                if(topScore===emojis.length){
                    this.setState({
                        score:0,
                        gameState:'WIN',
                       topScore:score, 
                    })
                }
                else{
                    this.setState({
                        score:0,
                        topScore:score,
                        gameState:'LOSS',
                }) 
                }
            }
            else{
                this.setState({
                    score:0,
                })
            }
              //<winOrLose score={score} onPlayAgainClick={this.onPlayAgainClick()} isWon={gameState} selectedTheme=''></winOrLose>
            
        }
        
        
        onChageTheme=()=>{
            
        }
    
    render(){
        const{score,topScore}=this.state
        return(
            <div>
              <NavBar score={score} topScore={topScore} onChangeTheme={this.onChangeTheme}></NavBar>
              <EmojisCardList>{this.renderEmojis()} </EmojisCardList>
              <HowToPlay selectedTheme={''}></HowToPlay>
            </div>
            )
    }

}export {EmojiGame}