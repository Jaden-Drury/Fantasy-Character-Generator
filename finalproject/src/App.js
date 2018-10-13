import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';
// import ClassSkills from './ClassSkills';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            PrintableVisible: true,
        };
    }

    // componentDidMount(){
    //     if(this.state.PrintableVisible === true) {
    //         console.log("true");
    //     }
    //     console.log("false");
    // }//https://reactjs.org/docs/conditional-rendering.html


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
