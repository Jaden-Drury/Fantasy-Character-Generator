import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Babarian from '.\Barbarian.js';


class App extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         width: window.innerWidth,
    //         height: window.innerHeight
    //     };
    // }


  render() {
    return (
      <div className="App">

        <h1>Character Gen</h1>

          <select>
              <option></option>
          </select>

        <Barbarian />

      </div>
    );
  }
}

export default App;
