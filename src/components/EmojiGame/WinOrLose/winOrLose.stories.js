import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

// import '../../../styles/tailwind.css';
import {WinOrLose} from './winOrLose';

export default {
   component: WinOrLose,
   title: 'Common/WinOrLose',
    
};

export const defaultView = () => <WinOrLose />;

export const WinOrLoseComponent = () => (
   <WinOrLose
     selectedTheme={'Dark'}
     score={'10'}
     isWon={'won'}
     onPlayAgainClick={action('play again')}
   />
);

export const knobs = () => (
   <WinOrLose
     selectedTheme={text('selectedTheme','Light')}
     score={text('score','11')}
     isWon={text('isWon','Won')}
     onPlayAgainClick={action('play again')}
   />
);

knobs.story = {
   decorators: [withKnobs]
};