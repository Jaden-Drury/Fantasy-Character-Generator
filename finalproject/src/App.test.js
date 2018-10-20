import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ClassSkills from '.ClassSkills.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

if(dice <= 0 || dice >= 7) {
  console.log("ERROR IN DICE ROLLING");
}