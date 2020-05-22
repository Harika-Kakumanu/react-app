import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs';

// import '../../../styles/tailwind.css';
import CounterApp from './counterApp.js';

export default {
    component:CounterApp,
    title: 'components/CounterApp',
   // decorators:
};

export const defaultView = () => <CounterApp />;

export const Increment = () => (
   <CounterApp
     onIncrement={action('clicked')}
   />
);


// export const knobs = () => (
//   <CounterApp
//      onIncrement={text('clicked','hii')}
//   />
// );

// knobs.story={
//     decorators:{withKnobs}
// }