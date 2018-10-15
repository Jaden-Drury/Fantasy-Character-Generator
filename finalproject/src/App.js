import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';
import Printable from './Printable';
// import ClassSkills from './ClassSkills';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            PrintableVisible: false,
        };
        this.generate = this.generate.bind(this)
    }

    printable(){
        if(this.state.PrintableVisible === true) {
            return(
                <Printable/>
            )
        }else {
            return(
                <Selectors/>
        )
        }
    }

    generate(){
        if(this.state.PrintableVisible ===false){
            this.setState({PrintableVisible: true})
        }else{
            this.setState({PrintableVisible: false})
        }

    }

  render() {
    return (
        <div className="App">

            {this.printable()}
            <button onClick={this.generate}>Generate Character</button>


        </div>
    );
  }
}

export default App;
