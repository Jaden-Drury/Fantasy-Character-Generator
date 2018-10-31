import React, { Component } from 'react';
import './App.css';
import Selectors from './Selectors';
import Printable from './Printable';
import ClassSkills from './ClassSkills';
//import ReactTest from './testRender/ReactTest.js';
import Barbarian from './classes/Barbarian.js';
import Bard from './classes/Bard.js';
import Cleric from './classes/Cleric.js';
import Druid from './classes/Druid.js';
import Fighter from './classes/Fighter.js';
import Monk from './classes/Monk.js';
import Paladin from './classes/Paladin.js';
import Ranger from './classes/Ranger.js';
import Rogue from './classes/Rogue.js';
import Sorcerer from './classes/Sorcerer.js';
import Warlock from './classes/Warlock.js';
import Wizard from './classes/Wizard.js';

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

<<<<<<< HEAD
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

    basePoints(){
=======
    baseHitPoints(){
>>>>>>> 1d82410d4e729485e5172fe1a6dd0fbf768b40dd
        try {
            switch (this.state.userClass){ 
                case "Barbarian": 
                    this.state.hitPoints = 12;
                    break;
                case "Bard":
                    this.state.hitPoints = 8;
                    break;
                case "Cleric":
                    this.state.hitPoitns = 8;
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
                    this.state.hitPoitns = 10;
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
                    this.state.hitPoitns = 8;
                    break;
                case "Wizard":
                    this.state.hitPoints = 6;
                    break;
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }

    abilityModifiers(skill) {
        if (skill === 1){
            this.state.modifier = -5;
        } if (skill === 2 || skill === 3){
            this.state.modifier = -4;
        } if (skill === 4 || skill === 5){
            this.state.modifier = -3;
        } if (skill === 6 || skill === 7){
            this.state.modifier = -2;
        } if (skill === 8 || skill === 9){
            this.state.modifier = -1;
        } if (skill === 12 || skill === 13){
            this.state.modifier = 1;
        } if (skill === 14 || skill === 15){
            this.state.modifier = 2;
        } if (skill === 16 || skill === 17){
            this.state.modifier = 3;
        } if (skill === 18 || skill === 19){
            this.state.modifier = 4;
        } if (skill === 20 || skill === 21){
            this.state.modifier = 5;
        } if (skill === 22 || skill === 23){
            this.state.modifier = 6;
        } if (skill === 24 || skill === 25){
            this.state.modifier = 7;
        } if (skill === 26 || skill === 27){
            this.state.modifier = 8;
        } if (skill === 28 || skill === 29){
            this.state.modifier = 9;
        } if (skill === 30){
            this.state.modifier = 10;
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
