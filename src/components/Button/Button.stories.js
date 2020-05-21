import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button.js';
import { withKnobs,text ,boolean, number } from "@storybook/addon-knobs";

export default {
  component: Button,
  title: 'Button',
  // decorators: [withKnobs]
 decorators: [storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>],
};

export const btnText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
  
);
emoji.story = {
   decorators: [storyFn => <div style={{ border: '5px solid red' }}>{storyFn()}</div>],
};


//import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// export default {
//   title: "Storybook Knobs",
//   decorators: [withKnobs]
// };
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
// export const withAButton = () => (
//   <button disabled={boolean("Disabled", false)}>
//     {text("Label", "Hello Storybook")}
//   </button>
// );

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};

//import React from 'react';
//import MyComponent from './MyComponent';

// export default {
//   title: 'MyComponent',
//   decorators: [storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>],
// };

// export const normal = () => <MyComponent />;
// export const special = () => <MyComponent text="The Boss" />;
// special.story = {
//   decorators: [storyFn => <div style={{ border: '5px solid red' }}>{storyFn()}</div>],
// };