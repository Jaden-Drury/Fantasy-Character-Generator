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
            pName: "",
            cName: "",
            userClass:"",
            race:"",
            level:"",
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
            buttonText: "Generate Character"
        };
        this.generate = this.generate.bind(this)
    }

    setClass(userClass){
        this.setState({userClass:userClass});
    }

    setStr(str){
        this.setState({str:str});
    }

    setDex(dex){
        this.setState({dex:dex});
    }

    setCon(con){
        this.setState({con:con});
    }

    setInt(int){
        this.setState({int:int});
    }

    setWis(wis){
        this.setState({wis:wis});
    }

    setCha(cha){
        this.setState({cha:cha});
    }

    setRace(race){
        this.setState({race:race})
    }

    setLevel(level){
        this.setState({level:level});
    }

    setPlayerName(pName){
        this.setState({pName:pName});
    }
    setCharacterName(cName){
        this.setState({cName:cName});
    }


    printable(){
        try{
            if (this.state.PrintableVisible === true){
                return(
                    <Printable pName={this.state.pName} cName={this.state.cName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} str={this.state.str} dex={this.state.dex}  con={this.state.con}  int={this.state.int}  wis={this.state.wis}  cha={this.state.cha}/>
                )
            } else {
                return(
                    <Selectors setPlayerName={(pName)=>this.setPlayerName(pName)} setCharacterName={(cName)=>this.setCharacterName(cName)} setClass={(userClass)=>this.setClass(userClass)} setRace={(race)=>this.setRace(race)} setLevel={(level)=>this.setLevel(level)}/>
                )
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

    generate(){
        try{
            if (this.state.PrintableVisible ===false){
                this.setState({PrintableVisible: true})
                this.setState({buttonText: "Generate New Sheet"});
            } else{
                this.setState({PrintableVisible: false})
                this.setState({buttonText: "Generate Character"});
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

  render() {
    return (
        <div className="App">

            {this.printable()}

            <button className="generate" onClick={this.generate}>
                {this.state.buttonText}
            </button>

            <ClassSkills setStr={(str)=>this.setStr(str)} setDex={(dex)=>this.setDex(dex)} setCon={(con)=>this.setCon(con)} setInt={(int)=>this.setInt(int)} setWis={(wis)=>this.setWis(wis)} setCha={(cha)=>this.setCha(cha)}/>

        </div>
    );
  }
}

export default App;
