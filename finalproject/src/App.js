import React, { Component } from 'react';
import './App.css';
import ReactTest from './testRender/ReactTest.js';
import Selectors from './Selectors';
import Printable from './Printable';
import ClassSkills from './ClassSkills';
import CharacterInput from './CharacterInput';
import LevelCharacterInput from './LevelCharacterInput.js'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            PrintableVisible: false,
            CharacterInput: false,
            playerName: null,
            characterName: null,
            userClass: null,
            race:null,
            level:null,
            newLevel: null,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            buttonText: "Generate Character",
            GenerateButton: true,
            CharacterInputButton: true,
            hitPoints: 0,
        };
        this.generate = this.generate.bind(this)
        this.InputGenerate = this.InputGenerate.bind(this)
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

    setNewLevel(level){
        this.setState({newLevel:level});
    }

    setPlayerName(playerNameParameter){
        this.setState({playerName:playerNameParameter});
    }
    setCharacterName(characterNameParameter){
        this.setState({characterName:characterNameParameter});
    }

    printable(){
            if (this.state.PrintableVisible === true){
                return(
                        <Printable hitPoints={this.state.hitPoints} playerName={this.state.playerName} characterName={this.state.characterName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} strength={this.state.strength} dexterity={this.state.dexterity}  constitution={this.state.constitution}  intelligence={this.state.intelligence}  wisdom={this.state.wisdom}  charisma={this.state.charisma}/>
                )
            }else if(this.state.CharacterInput === true){
                return(
                    //<CharacterInput/>
                    <CharacterInput setPlayerName={(playerNameParameter)=>this.setPlayerName(playerNameParameter)} setCharacterName={(characterNameParameter)=>this.setCharacterName(characterNameParameter)} setClass={(userClass)=>this.setClass(userClass)} setRace={(race)=>this.setRace(race)} setLevel={(level)=>this.setLevel(level)} setNewLevel={(newLevel)=>this.setNewLevel(newLevel)} setStr={(str)=>this.setStr(str)} setDex={(dex)=>this.setDex(dex)} setCon={(con)=>this.setCon(con)} setInt={(int)=>this.setInt(int)} setCha={(cha)=>this.setCha(cha)} setWis={(wis)=>this.setWis(wis)}/>
            )
            } else {
                return(
                    <Selectors setPlayerName={(playerNameParameter)=>this.setPlayerName(playerNameParameter)} setCharacterName={(characterNameParameter)=>this.setCharacterName(characterNameParameter)} setClass={(userClass)=>this.setClass(userClass)} setRace={(race)=>this.setRace(race)} setLevel={(level)=>this.setLevel(level)}/>
            )
            }
    }



    GenerateButtonToggle(){
        try{
            if (this.state.GenerateButton === true){
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

    generate(){
        try{
            if (this.state.PrintableVisible === false){
                this.setState({PrintableVisible: true})
                this.setState({GenerateButton: false})
                this.setState({CharacterInputButton: false})
            } else{
                this.setState({PrintableVisible: false})
                this.setState({buttonText: "Generate Character"});
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

    InputButtonToggle(){
        try{
            if (this.state.CharacterInputButton === true){
                return(
                    <button className="InputPage" onClick={this.InputGenerate}>
                        Click here to Level an Existing Character
                    </button>
                )
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

    InputGenerate(){
        try{
            if (this.state.CharacterInput ===false){
                console.log("CharacterInput is True")
                this.setState({CharacterInput: true})
                this.setState({GenerateButton: true})
                this.setState({CharacterInputButton: false})
                this.setState({PrintableVisable: false})
            } else{
                this.setState({CharacterInput: false})
            }
        } catch (Exception){
            console.log(Exception);
        }
    }

    setStats(){
        if(CharacterInput === true){
            console.log("Character Input");
            return(
                <LevelCharacterInput setStr={(str)=>this.setStr(str)} setDex={(dex)=>this.setDex(dex)} setCon={(con)=>this.setCon(con)} setInt={(int)=>this.setInt(int)} setWis={(wis)=>this.setWis(wis)} setCha={(cha)=>this.setCha(cha)}/>
            )
        }
        else {
            console.log("Default")
            return(
                <ClassSkills setStr={(str)=>this.setStr(str)} setDex={(dex)=>this.setDex(dex)} setCon={(con)=>this.setCon(con)} setInt={(int)=>this.setInt(int)} setWis={(wis)=>this.setWis(wis)} setCha={(cha)=>this.setCha(cha)}/>
            )
        }
    }

  render() {
      return (
        <div className="App">
            {this.InputButtonToggle()}
            {this.GenerateButtonToggle()}
            {this.printable()}
            

            {/*/!*Uncomment The below line to enable testing*!/*/}
            {/*<ReactTest HP ={this.state.hitPoints} playerName={this.state.playerName} characterName={this.state.characterName} userClass={this.state.userClass} race={this.state.race} level={this.state.level} strength={this.state.strength} intelligence={this.state.intelligence} constitution={this.state.constitution} wisdom={this.state.wisdom} dexterity={this.state.dexterity} charisma={this.state.charisma}/>*/}
            {/*/!*Uncomment The above line to enable testing*!/*/}

            {this.setStats()}


        </div>
    );
  }
}

export default App;
