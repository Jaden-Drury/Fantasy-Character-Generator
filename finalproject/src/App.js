import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';


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

        <h1>D&D 5e Character Generator</h1>

        <Selectors/>


      </div>
    );
  }
}

export default App;
