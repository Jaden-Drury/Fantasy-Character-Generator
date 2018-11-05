import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';
import Printable from './Printable';
import ClassSkills from './ClassSkills';
//import ReactTest from './testRender/ReactTest.js';
// import Barbarian from './classes/Barbarian.js';
// import Bard from './classes/Bard.js';
// import Cleric from './classes/Cleric.js';
// import Druid from './classes/Druid.js';
// import Fighter from './classes/Fighter.js';
// import Monk from './classes/Monk.js';
// import Paladin from './classes/Paladin.js';
// import Ranger from './classes/Ranger.js';
// import Rogue from './classes/Rogue.js';
// import Sorcerer from './classes/Sorcerer.js';
// import Warlock from './classes/Warlock.js';
// import Wizard from './classes/Wizard.js';

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

    printable(){
        //this.racialBonuses();
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

    racialBonuses(){
        try {
            switch (this.state.race){ 
                case "Dragonborn": 
                    console.log(this.state.strength);
                    this.state.strength = this.state.strength +2;
                    console.log(this.state.strength);
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
                    this.setState.hitPoints = 12;
                    break;
                case "Bard":
                    this.setState.hitPoints = 8;
                    break;
                case "Cleric":
                    this.setState.hitPoitns = 8;
                    break;
                case "Druid":
                    this.setState.hitPoints = 8;
                    break;
                case "Fighter": 
                    this.setState.hitPoints = 10;
                    break;
                case "Monk":
                    this.setState.hitPoints = 8;
                    break;
                case "Paladin":
                    this.setState.hitPoitns = 10;
                    break;
                case "Ranger":
                    this.setState.hitPoints = 10;
                    break;
                case "Rogue": 
                    this.setState.hitPoints = 8;
                    break;
                case "Sorcerer":
                    this.setState.hitPoints = 6;
                    break;
                case "Warlock":
                    this.setState.hitPoitns = 8;
                    break;
                case "Wizard":
                    this.setState.hitPoints = 6;
                    break;
                default:
                    break;
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }

    abilityModifiers(skill) {
        if (skill === 1){
            this.setState.modifier = -5;
        } if (skill === 2 || skill === 3){
            this.setState.modifier = -4;
        } if (skill === 4 || skill === 5){
            this.setState.modifier = -3;
        } if (skill === 6 || skill === 7){
            this.setState.modifier = -2;
        } if (skill === 8 || skill === 9){
            this.setState.modifier = -1;
        } if (skill === 12 || skill === 13){
            this.setState.modifier = 1;
        } if (skill === 14 || skill === 15){
            this.setState.modifier = 2;
        } if (skill === 16 || skill === 17){
            this.setState.modifier = 3;
        } if (skill === 18 || skill === 19){
            this.setState.modifier = 4;
        } if (skill === 20 || skill === 21){
            this.setState.modifier = 5;
        } if (skill === 22 || skill === 23){
            this.setState.modifier = 6;
        } if (skill === 24 || skill === 25){
            this.setState.modifier = 7;
        } if (skill === 26 || skill === 27){
            this.setState.modifier = 8;
        } if (skill === 28 || skill === 29){
            this.setState.modifier = 9;
        } if (skill === 30){
            this.setState.modifier = 10;
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

            {this.basePoints()}
            {this.printable()}

            {/*/!*Uncomment The below line to enable testing*!/*/}
            {/*<ReactTest playerName={this.state.playerName} characterName={this.state.characterName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} strength={this.state.strength} intelligence={this.state.intelligence} constitution={this.state.constitution} wisdom={this.state.wisdom} dexterity={this.state.dexterity} charisma={this.state.charisma}/>*/}
            {/*/!*Uncomment The above line to enable testing*!/*/}

            <button className="generate" onClick={this.generate}>
                {this.state.buttonText}
            </button>

            <ClassSkills setStr={(str)=>this.setStr(str)} setDex={(dex)=>this.setDex(dex)} setCon={(con)=>this.setCon(con)} setInt={(int)=>this.setInt(int)} setWis={(wis)=>this.setWis(wis)} setCha={(cha)=>this.setCha(cha)}/>
        </div>
    );
  }
}

export default App;
