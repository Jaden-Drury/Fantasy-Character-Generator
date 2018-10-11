/**
 * Created by jadendrury on 10/11/18.
 */

import React, { Component } from 'react';




class Selectors extends Component {

    constructor(props){
        super(props);
        this.state = {
            class: "",
            race: "",
            level: ""
        };
    }

    generate(){

        console.log('the button was clicked');
    }


    render() {
        console.log(this.state.class)
        return (
            <div className="Selectors">

                <div className="Custom">
                    <select >
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
                    <select>
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

                <div className="Custom">
                    <select>
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
                    <button onClick={this.generate} >Generate Character</button>
                </div>


            </div>
        );
    }
}

export default Selectors;