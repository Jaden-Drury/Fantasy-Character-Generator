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
    }
    printable(){
        console.log(this.props.PrintableVisible)
        if(this.state.PrintableVisible === true) {
            console.log("PrintableVisable is True");
            return(
                <Printable/>
            )
        }else {
            return(
            <Selectors/>
            )
        }
    }

  render() {
    return (
        <div className="App">

            {this.printable()}

        </div>
    );
  }
}

export default App;
