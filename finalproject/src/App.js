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
            userClass:"",
            race:"",
            level:""
        };
        this.generate = this.generate.bind(this)
    }

    setClass(userClass){
        this.setState({userClass:userClass});
    }

    setRace(race){
        this.setState({race})
    }

    setLevel(level){
        this.setState({level});
    }


    printable(){
        if(this.state.PrintableVisible === true) {
            return(
                <Printable userClass={this.state.userClass} race={this.state.race} level={this.state.level} />
            )
        }else {
            return(
                <Selectors setClass={(userClass)=>this.setClass(userClass)} setRace={(race)=>this.setRace(race)} setLevel={(level)=>this.setLevel(level)}/>
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
