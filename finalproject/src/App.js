import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            PrintableVisible: true,
        };
    }

    componentDidMount(){
        if(this.state.PrintableVisible === true) {
            console.log("true");
        }
        console.log("false");
    }//https://reactjs.org/docs/conditional-rendering.html


  render() {
    return (
        <div className="App">


            <h1>D&D 5E CHARACTER GENERATOR</h1>

        <Selectors/>

      </div>
    );
  }
}

export default App;
