import React, { Component } from 'react';
import './App.css';
import ReactTest from './testRender/ReactTest.js';
import Selectors from './Selectors';
import Printable from './Printable';
import ClassSkills from './ClassSkills';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            PrintableVisible: false,
            playerName: null,
            characterName: null,
            userClass: null,
            race:null,
            level:null,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            buttonText: "Generate Character",
            buttonVisible: true,
            hitPoints: 0,
        };
        this.generate = this.generate.bind(this)
    }

    setClass(userClass){
        this.setState({userClass:userClass});
    }

    setStr(strengthParameter){
        this.setState({strength:strengthParameter});
    }

    setDex(dexterityParameter){
        this.setState({dexterity:dexterityParameter});
    }

    setCon(constitutionParameter){
        this.setState({constitution:constitutionParameter});
    }

    setInt(intelligenceParameter){
        this.setState({intelligence:intelligenceParameter});
    }

    setWis(wisdomParameter){
        this.setState({wisdom:wisdomParameter});
    }

    setCha(charismaParameter){
        this.setState({charisma:charismaParameter});
    }

    setRace(race){
        this.setState({race:race})
    }

    setLevel(level){
        this.setState({level:level});
    }

    setPlayerName(playerNameParameter){
        this.setState({playerName:playerNameParameter});
    }
    setCharacterName(characterNameParameter){
        this.setState({characterName:characterNameParameter});
    }

    // <button className="print" onClick={window.print()}>
    //                         Print Character Sheet
    // </button>
    //print button that won't work right

    printable(){
        try{
            if (this.state.PrintableVisible === true){
                return(
                        <Printable hitPoints={this.state.hitPoints} playerName={this.state.playerName} characterName={this.state.characterName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} strength={this.state.strength} dexterity={this.state.dexterity}  constitution={this.state.constitution}  intelligence={this.state.intelligence}  wisdom={this.state.wisdom}  charisma={this.state.charisma}/>
                )
            } else {
                return(
                    <Selectors setPlayerName={(playerNameParameter)=>this.setPlayerName(playerNameParameter)} setCharacterName={(characterNameParameter)=>this.setCharacterName(characterNameParameter)} setClass={(userClass)=>this.setClass(userClass)} setRace={(race)=>this.setRace(race)} setLevel={(level)=>this.setLevel(level)}/>
                )
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

    buttonToggle(){
        try{
            if (this.state.buttonVisible === true){
                return(
                <button className="generate" onClick={this.generate}>
                    {this.state.buttonText}
                </button> 
                )
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

    racialBonuses(){
        try {
            switch (this.state.race){ 
                case "Dragonborn": 
                    this.state.strength = this.state.strength +2;
                    this.state.charisma = this.state.charisma +1;
                    break;
                case "Dwarf": 
                    this.state.constitution = this.state.constitution +2;
                    break;
                case "Elf": 
                    this.state.dexterity = this.state.dexterity +2;
                    break;
                case "Gnome": 
                    this.state.intelligence = this.state.intelligence +2;
                    break;
                case "Half-Elf": 
                    this.state.charisma = this.state.charisma +2;
                    break;
                case "Half-Orc": 
                    this.state.strength = this.state.strength +2;
                    this.state.constitution = this.state.constitution +1;
                    break;
                case "Halfling": 
                    this.state.dexterity = this.state.dexterity +2;
                    break;
                case "Human": 
                    this.state.dexterity = this.state.dexterity +1;
                    this.state.strength = this.state.strength +1;
                    this.state.constitution = this.state.constitution +1;
                    this.state.intelligence = this.state.intelligence +1;
                    this.state.charisma = this.state.charisma +1;
                    this.state.wisdom = this.state.wisdom +1;
                    break;
                case "Tiefling":
                    this.state.charisma = this.state.charisma +2;
                    this.state.intelligence = this.state.intelligence +1;
                    break;
                default:
                    break;
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }

    baseHitPoints(){
        try {
            switch (this.state.userClass){
                case "Barbarian":
                    this.state.hitPoints = 12;
                    break;
                case "Bard":
                    this.state.hitPoints = 8;
                    break;
                case "Cleric":
                    this.state.hitPoints = 8;
                    break;
                case "Druid":
                    this.state.hitPoints = 8;
                    break;
                case "Fighter":
                    this.state.hitPoints = 10;
                    break;
                case "Monk":
                    this.state.hitPoints = 8;
                    break;
                case "Paladin":
                    this.state.hitPoints = 10;
                    break;
                case "Ranger":
                    this.state.hitPoints = 10;
                    break;
                case "Rogue":
                    this.state.hitPoints = 8;
                    break;
                case "Sorcerer":
                    this.state.hitPoints = 6;
                    break;
                case "Warlock":
                    this.state.hitPoints = 8;
                    break;
                case "Wizard":
                    this.state.hitPoints = 6;
                    break;
                default:
                    break;
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }

    generate(){
        try{
            if (this.state.PrintableVisible ===false){
                this.setState({PrintableVisible: true})
                this.setState({buttonVisible: false})
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
            {this.buttonToggle()}
            {this.baseHitPoints()}
            {this.printable()}
            {this.racialBonuses()}

            {/*/!*Uncomment The below line to enable testing*!/*/}
            <ReactTest HP ={this.state.hitPoints} playerName={this.state.playerName} characterName={this.state.characterName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} strength={this.state.strength} intelligence={this.state.intelligence} constitution={this.state.constitution} wisdom={this.state.wisdom} dexterity={this.state.dexterity} charisma={this.state.charisma}/>
            {/*/!*Uncomment The above line to enable testing*!/*/}

            

            <ClassSkills setStr={(str)=>this.setStr(str)} setDex={(dex)=>this.setDex(dex)} setCon={(con)=>this.setCon(con)} setInt={(int)=>this.setInt(int)} setWis={(wis)=>this.setWis(wis)} setCha={(cha)=>this.setCha(cha)}/>
        </div>
    );
  }
}

export default App;
