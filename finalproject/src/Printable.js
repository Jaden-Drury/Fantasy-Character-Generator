/**
 * Created by jadendrury on 10/12/18.
 */

import React, { Component } from 'react';
import './App.css';


class Printable extends Component{

    constructor(props){
        super(props);
        this.state = {
            class: "",
            race: "",
            level: ""
        };
    }

render(){
    console.log(this.props)
    return(

        <div className="Printable">


            <h3 id="charSheet">Character Sheet</h3>
            <div class="wrapper">
                <h3>Class: {this.props.userClass}</h3>
                <h3>Race: {this.props.race}</h3>
                <h3>Level: {this.props.level}</h3>
            </div>
            <ol class="statList">
                <li>Strength</li>
                <li>Dexterity</li>
                <li>Constitution</li>
                <li>Intelligence</li>
                <li>Wisdom</li>
                <li>Charisma</li>
            </ol>


        </div>
    );
}
}
export default Printable;