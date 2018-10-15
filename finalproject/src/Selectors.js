/**
 * Created by jadendrury on 10/11/18.
 */

import React, { Component } from 'react';
// import App from './App';
import './App.css';
import {
    BrowserRouter as Router,
    // Route,
    // Link
} from 'react-router-dom'

class Selectors extends Component {

    constructor(props){
        super(props);
        this.state = {
            class: "",
            race: "",
            level: "",
            PrintableVisible: "return statement", //we need to return this value over to APP.js, so we can use the generate button to change it's state here
        };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeRace = this.handleChangeRace.bind(this)
        this.handleChangeLevel = this.handleChangeLevel.bind(this)
        this.generate = this.generate.bind(this)

    }

    handleChange(event){
    this.setState({class: event.target.value}); //the function that pulls from the class selector and sets the state of class to it
    }

    handleChangeRace(event){
    this.setState({race: event.target.value}); //the function that pulls from the race selector and sets the state of race to it
    }

    handleChangeLevel(event){
    this.setState({level: event.target.value}); //the function that pulls from the level selector and sets the state of level to it
    }


    generate(){
        console.log("Class : " + this.state.class);
        console.log("Race: " + this.state.race);        //this is a console log in the browser to see the updated state when the generate button is clicked
        console.log("Level: " + this.state.level);
        console.log(this.state.PrintableVisible)
        return(this.state.PrintableVisible);
    }


    render() {
        return (
            <Router>
            <div className="Selectors">

                <div className="Custom">


                    <h1>D&D 5E CHARACTER GENERATOR</h1>


                    <h2> Class: </h2>

                    <select value={this.state.class} onChange={this.handleChange}>
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
                    <br/>
                </div>

                <br/>

                <div className="Custom">

                    <h2> Race: </h2>

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
                </div>

                <br/>

                <div className="Custom">

                    <h2> Level: </h2>

                    <select value={this.state.level} onChange={this.handleChangeLevel}>
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
                        <option value={"16"}>17</option>
                        <option value={"18"}>18</option>
                        <option value={"19"}>19</option>
                        <option value={"20"}>20</option>
                        <option value={"21"}>21</option>
                        <option value={"22"}>22</option>
                        <option value={"23"}>23</option>
                        <option value={"24"}>24</option>
                        <option value={"25"}>25</option>
                        <option value={"26"}>26</option>
                        <option value={"27"}>27</option>
                        <option value={"28"}>28</option>
                        <option value={"29"}>29</option>
                        <option value={"30"}>30</option>
                    </select>
                </div>

                <br/>

                {/*<Route path="/Printable" component={Printable} />*/}

                <div className="Custom">
                    {/*<Link to="/Printable" target={'blank'}>*/}

                    <button onClick={this.generate}>Generate Character</button>

                    {/*</Link>*/}
                </div>

            </div>
            </Router>
        );
    }
}

export default Selectors;
