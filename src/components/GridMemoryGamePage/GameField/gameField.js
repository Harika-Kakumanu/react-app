import React from 'react';
import {GameFieldComponent} from './index.js'
import {data} from '../../../stores/gridData';

class GameField extends React.Component{
    
   
    render(){
         //console.log(data)
        return(
            <GameFieldComponent>
               <div className='grid-container'>
                 <p>1</p>
               </div>
               
            </GameFieldComponent>
            )
    }
}

export default GameField