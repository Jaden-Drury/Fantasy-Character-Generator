import React, { Component } from 'react';
import './App.css';
import Printable from './Printable';

class BasicCharacterInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            class: "",
            race: "",
            level: "",
            newLevel: "",
            playerName: null,
            characterName: null,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeRace = this.handleChangeRace.bind(this)
        this.handleChangeLevel = this.handleChangeLevel.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangecName = this.handleChangecName.bind(this)
        this.handleChangeStrength = this.handleChangeStrength.bind(this)
        this.handleChangeDexterity = this.handleChangeDexterity.bind(this)
        this.handleChangeConstitution = this.handleChangeConstitution.bind(this)
        this.handleChangeIntelligence = this.handleChangeIntelligence.bind(this)
        this.handleChangeWisdom = this.handleChangeWisdom.bind(this)
        this.handleChangeCharisma = this.handleChangeCharisma.bind(this)
        this.handleChangeNewLevel = this.handleChangeNewLevel.bind(this)

    }

    handleChangeStrength(event){
        this.setState({strength: event.target.value});
        this.props.setStr(event.target.value);
    }

    handleChangeDexterity(event){
        this.setState({dexterity: event.target.value});
        this.props.setDex(event.target.value);
    }

    handleChangeConstitution(event){
        this.setState({constitution: event.target.value});
        this.props.setCon(event.target.value);
    }

    handleChangeIntelligence(event){
        this.setState({intelligence: event.target.value});
        this.props.setInt(event.target.value);
    }

    handleChangeWisdom(event){
        this.setState({wisdom: event.target.value});
        this.props.setWis(event.target.value);
    }

    handleChangeCharisma(event){
        this.setState({charisma: event.target.value});
        this.props.setCha(event.target.value);
    }

    handleChange(event){
        this.setState({class: event.target.value}); //the function that pulls from the class selector and sets the state of class to it
        this.props.setClass(event.target.value);
    }

    handleChangeRace(event){
        this.setState({race: event.target.value}); //the function that pulls from the race selector and sets the state of race to it
        this.props.setRace(event.target.value);
    }

    handleChangeLevel(event){
        this.setState({level: event.target.value}); //the function that pulls from the level selector and sets the state of level to it
        this.props.setLevel(event.target.value)
    }

    handleChangeNewLevel(event){
        this.setState({newLevel: event.target.value}); //the function that pulls from the level selector and sets the state of level to it
        this.props.setNewLevel(event.target.value)
    }

    handleChangeName(event){
        this.setState({playerName: event.target.value})
        this.props.setPlayerName(event.target.value)
    }

    handleChangecName(event){
        this.setState({characterName: event.target.value})
        this.props.setCharacterName(event.target.value)
    }


    render() {
        return (
            <div className="Printable">

                <div className="caller">
                    <Printable passName={this.state.playerName} passcName={this.state.characterName} passClass={this.state.class} passRace={this.state.race} passLevel={this.state.level}/>
                </div>

                <div className="Custom">
                    <h1>Input Your Character Stats</h1>

                    <form>
                        <h2>Player:</h2>
                        <input onChange={this.handleChangeName} placeholder="Input player Name" type="text"/>
                        <h2>Character:</h2>
                        <input onChange={this.handleChangecName} placeholder="Input character Name" type="text"/>
                    </form>

                    <h2>Class:</h2>

                    <select value={this.state.class} onChange={this.handleChange} classchoice={this.state.class}>
                        <option value={""}>Select a Class</option>
                        <option value={"Barbarian"}>Barbarian</option>
                        <option value={"Bard"}>Bard</option>
                        <option value={"Cleric"}>Cleric</option>
                        <option value={"Druid"}>Druid</option>
                        <option value={"Fighter"}>Fighter</option>
                        <option value={"Monk"}>Monk</option>
                        <option value={"Paladin"}>Paladin</option>
                        <option value={"Ranger"}>Ranger</option>
                        <option value={"Rogue"}>Rogue</option>
                        <option value={"Sorcerer"}>Sorcerer</option>
                        <option value={"Warlock"}>Warlock</option>
                        <option value={"Wizard"}>Wizard</option>
                    </select>

                    <h2>Race:</h2>

                    <select value={this.state.race} onChange={this.handleChangeRace}>
                        <option value={""}>Select a Race</option>
                        <option value={"Dragonborn"}>Dragonborn</option>
                        <option value={"Dwarf"}>Dwarf</option>
                        <option value={"Elf"}>Elf</option>
                        <option value={"Gnome"}>Gnome</option>
                        <option value={"Half-Elf"}>Half-Elf</option>
                        <option value={"Half-Orc"}>Half-Orc</option>
                        <option value={"Halfling"}>Halfling</option>
                        <option value={"Human"}>Human</option>
                        <option value={"Tiefling"}>Tiefling</option>
                    </select>

                    <h2>Level:</h2>

                    <select value={this.state.level} onChange={this.handleChangeLevel}>
                        <option value={""}>Select Your Current Level</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                        <option value={"7"}>7</option>
                        <option value={"8"}>8</option>
                        <option value={"9"}>9</option>
                        <option value={"10"}>10</option>
                        <option value={"11"}>11</option>
                        <option value={"12"}>12</option>
                        <option value={"13"}>13</option>
                        <option value={"14"}>14</option>
                        <option value={"15"}>15</option>
                        <option value={"16"}>16</option>
                        <option value={"17"}>17</option>
                        <option value={"18"}>18</option>
                        <option value={"19"}>19</option>
                        <option value={"20"}>20</option>
                    </select>

                    <h2>Select the Level You Would Like to Move To:</h2>

                    <select value={this.state.newLevel} onChange={this.handleChangeNewLevel}>
                        <option value={""}>Select a Level</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                        <option value={"7"}>7</option>
                        <option value={"8"}>8</option>
                        <option value={"9"}>9</option>
                        <option value={"10"}>10</option>
                        <option value={"11"}>11</option>
                        <option value={"12"}>12</option>
                        <option value={"13"}>13</option>
                        <option value={"14"}>14</option>
                        <option value={"15"}>15</option>
                        <option value={"16"}>16</option>
                        <option value={"17"}>17</option>
                        <option value={"18"}>18</option>
                        <option value={"19"}>19</option>
                        <option value={"20"}>20</option>
                    </select>

                    <h2>Strength:</h2>

                    <input type="number" placeholder="0" onChange={this.handleChangeStrength}/>

                    <h2>Dexterity:</h2>

                    <input type="number" placeholder="0" onChange={this.handleChangeDexterity}/>

                    <h2>Constitution:</h2>

                    <input type="number" placeholder="0" onChange={this.handleChangeConstitution}/>

                    <h2>Intelligence:</h2>

                    <input type="number" placeholder="0" onChange={this.handleChangeIntelligence}/>

                    <h2>Wisdom:</h2>

                    <input type="number" placeholder="0" onChange={this.handleChangeWisdom}/>

                    <h2>Charisma:</h2>

                    <input type="number" placeholder="0" onChange={this.handleChangeCharisma}/>


                </div>

            </div>
        );
    }
}

export default BasicCharacterInput;
