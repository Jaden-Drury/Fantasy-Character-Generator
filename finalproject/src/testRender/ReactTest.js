/**
 * Created by jadendrury on 10/21/18.
 */

import React, { Component } from 'react';
import '../App.css';
import Fail from './fail'
import Pass from './pass'

//testing set up this way is useful as desierable as it is easy for state and props to not get
//passed properly or correctly, as well as it's possible for them to get deformed along the way
//these tests can check if the user input is actually getting passed correctly if at all

class ReactTest extends Component{

    constructor(props){
        super(props);
        this.state = {
            testState: "false",
        };
    }

    setTestState(){
        if(this.props.playerName === null){
            this.setState({testState: "false"})
        }
    }

    nameNotNull(){
        if(this.props.playerName === null || this.props.characterName === null){ //this is a example of how testing is set up
            console.log("Test is False and Fails")
            return(
                <Fail/>
            )
        }else{
            console.log("Test is True and Passes")
            return(
                <Pass/>
            )

        }
    }

    dropNotNull(){
        if(this.props.userClass === null || this.props.race === null || this.props.level === null){ //this is a example of how testing is set up
            console.log("Test is False and Fails")
            return(
                <Fail/>
            )
        }else{
            console.log("Test is True and Passes")
            return(
                <Pass/>
            )

        }
    }

    testForSavingRoll() {
        var savingRolls = this.savingRolls();

        if ( this.props.userClass === "Barbarian" || this.props.userClass === "Fighter") {
            if ( savingRolls === "Strength Constitution") {
                return(
                    <Pass/>
                )
            }
        }
        if ( this.props.userClass === "Bard") {
            if ( savingRolls === "Dexterity Charisma") {
                return(
                    <Pass/>
                )
            }    
        }
        if ( this.props.userClass === "Cleric" || this.props.userClass === "Warlock") {
            if ( savingRolls === "Wisdom Charisma") {
                return(
                    <Pass/>
                )
            }
        }
        if ( this.props.userClass === "Druid" || this.props.userClass === "Wizard") {
            if ( savingRolls === "Intelligence Wisdom") {
                return(
                    <Pass/>
                )
            }
        }
        if ( this.props.userClass === "Monk" || this.props.userClass === "Ranger") {
            if ( savingRolls === "Strength Dexterity") {
                return(
                    <Pass/>
                )
            }
        }
        if ( this.props.userClass === "Paladin" ) {
            if ( savingRolls === "Wisdom Charisma") {
                return(
                    <Pass/>
                )
            }
        }
        if ( this.props.userClass === "Rouge" ) {
            if ( savingRolls === "Dexterity Intelligence") {
                return(
                    <Pass/>
                )
            }
        }
        if ( this.props.userClass === "Sorcerer" ) {
            if ( savingRolls === "Constitution Charisma") {
                return(
                    <Pass/>
                )
            }
        }
        return (
            <Fail/>
        )
    }

    // This is a helping function to get the Saving Rolls; is located in Printable
    savingRolls() {
        var savingRollDeterminer = this.props.userClass;

        if (savingRollDeterminer === "Barbarian" || savingRollDeterminer === "Fighter") {
            return ("Strength Constitution");
        } if (savingRollDeterminer === "Bard"){
            return ("Dexterity Charisma");
        } if (savingRollDeterminer === "Cleric" || savingRollDeterminer === "Warlock") {
            return ("Wisdom Charisma");
        } if (savingRollDeterminer === "Druid" || savingRollDeterminer === "Wizard") {
            return ("Intelligence Wisdom");
        } if (savingRollDeterminer === "Monk" || savingRollDeterminer === "Ranger") {
            return ("Strength Dexterity");
        } if (savingRollDeterminer === "Paladin"){
            return ("Wisdom Charisma");
        } if (savingRollDeterminer === "Rouge"){
            return ("Dexterity Intelligence");
        } if (savingRollDeterminer === "Sorcerer"){
            return ("Constitution Charisma");
        }
    }

    testForProficiencyBonus(){
        var bonus = this.proficiencyBonus();
        if ( bonus === "2" || bonus === "3" || bonus === "4" || bonus === "5" || bonus === "6" ) {
            return(
                <Pass/>
            )
        }
        return(
            <Fail/>
        )
    }


    // This is a helping function to get the Proficiency Bonus; is located in Printable
    proficiencyBonus(){
        var level = this.props.level;
        if (level === "1" || level === "2" || level === "3" || level === "4"){
            return ("2");
        } if (level === "5" || level === "6" || level === "7" || level === "8") {
            return ("3");
        } if (level === "9" || level === "10" || level === "11" || level === "12"){
            return ("4");
        } if (level === "13" || level === "14" || level === "15" || level === "16"){
            return ("5");
        } if (level === "17" || level === "18" || level === "19" || level === "20"){
            return ("6");
        } return ("0");
    }
    render(){
        return(

            <div className="ReactTest">

                {this.nameNotNull()}
                {this.dropNotNull()}
                {this.testForSavingRoll()}
                {this.testForProficiencyBonus()}

            </div>
        );
    }
}
export default ReactTest;