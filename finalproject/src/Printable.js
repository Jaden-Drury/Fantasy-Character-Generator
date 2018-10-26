import React, { Component } from 'react';
import './App.css';

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
                    <h3 className="names">Player Name: {this.props.playerName}</h3>
                    <h3 className="names">Character Name: {this.props.characterName}</h3>
                </div>

                <div className="wrapper">
                    <h3>Class: {this.props.userClass}</h3>
                    <h3>Race: {this.props.race}</h3>
                    <h3>Level: {this.props.level}</h3>
                    <h3>HP: {this.props.hitPoints}</h3>
                </div>

                <ol className="statList">
                    <li>Strength <br/> <label className="statNum">{this.props.strength}</label></li>
                    <li>Dexterity <br/> <label className="statNum">{this.props.dexterity}</label></li>
                    <li>Constitution <br/> <label className="statNum">{this.props.constitution}</label></li>
                    <li>Intelligence <br/> <label className="statNum">{this.props.intelligence}</label></li>
                    <li>Wisdom <br/> <label className="statNum">{this.props.wisdom}</label></li>
                    <li>Charisma <br/> <label className="statNum">{this.props.charisma}</label></li>
                </ol>

            </div>
        );
    }
}
export default Printable;