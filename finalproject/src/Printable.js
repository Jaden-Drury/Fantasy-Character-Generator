/**
 * Created by jadendrury on 10/12/18.
 */

import React, { Component } from 'react';
import './App.css';
// import ClassSkills from './ClassSkills'


class Printable extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

render(){
    console.log(this.props)
    return(

        <div className="Printable">

            <h3 id="charSheet">Character Sheet</h3>
            <div className="wrapper">
                <h3>Class: {this.props.userClass}</h3>
                <h3>Race: {this.props.race}</h3>
                <h3>Level: {this.props.level}</h3>
                <h3>Player Name: </h3>
            </div>
            <ol className="statList">
                <li>Strength <br/> {this.props.str}</li>
                <li>Dexterity <br/> {this.props.dex}</li>
                <li>Constitution <br/> {this.props.con}</li>
                <li>Intelligence <br/> {this.props.int}</li>
                <li>Wisdom <br/> {this.props.wis}</li>
                <li>Charisma <br/> {this.props.cha}</li>
            </ol>


        </div>
    );
}
}
export default Printable;