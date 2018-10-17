import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';
import Printable from './Printable';
import ClassSkills from './ClassSkills';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            PrintableVisible: false,
            userClass:"",
            race:"",
            level:"",
            buttonText: "Generate Character"
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
                //reminder from Bryon. Shit rolls downhill
                <Selectors setClass={(userClass)=>this.setClass(userClass)} setRace={(race)=>this.setRace(race)} setLevel={(level)=>this.setLevel(level)}/>
            )
        }
    }

    stats(){
        return(
            <ClassSkills/>
        )
    }

    generate(){
        if(this.state.PrintableVisible ===false){
            this.setState({PrintableVisible: true})
            this.setState({buttonText: "Go Back"});
        }else{
            this.setState({PrintableVisible: false})
            this.setState({buttonText: "Generate Character"});
        }

    }

  render() {
    return (
        <div className="App">

            {this.printable()}
            {this.stats()}
            <button onClick={this.generate}>{this.state.buttonText}</button>

        </div>
    );
  }
}

export default App;
