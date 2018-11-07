import React, { Component } from 'react';
import './App.css';

class Printable extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    abilityModifiers(skill) {
        if (skill === 1){
            return(this.setState.modifier = -5);
        } if (skill === 2 || skill === 3){
            return(this.setState.modifier = -4);
        } if (skill === 4 || skill === 5){
            return(this.setState.modifier = -3);
        } if (skill === 6 || skill === 7){
            return(this.setState.modifier = -2);
        } if (skill === 8 || skill === 9){
            return(this.setState.modifier = -1);
        }if (skill === 10 || skill === 11){
            return(this.setState.modifier = 0);
        }if (skill === 12 || skill === 13){
            return(this.setState.modifier = 1);
        } if (skill === 14 || skill === 15){
            return(this.setState.modifier = 2);
        } if (skill === 16 || skill === 17){
            return(this.setState.modifier = 3);
        } if (skill === 18 || skill === 19){
            return(this.setState.modifier = 4);
        } if (skill === 20 || skill === 21){
            return(this.setState.modifier = 5);
        } if (skill === 22 || skill === 23){
            return(this.setState.modifier = 6);
        } if (skill === 24 || skill === 25){
            return(this.setState.modifier = 7);
        } if (skill === 26 || skill === 27){
            return(this.setState.modifier = 8);
        } if (skill === 28 || skill === 29){
            return(this.setState.modifier = 9);
        } if (skill === 30){
            return(this.setState.modifier = 10);
        }
    }
    

    rollD12(diceNumber){
    const min = 1;
    const max = 12;
    var sum = 0;
    var random = 0;
    for(var i=diceNumber;i>0;i--){
        random = Math.ceil(Math.random() * max-min + min);
        console.log("random is " + random)
        sum = sum + random;
    }
    return(sum + this.abilityModifiers(this.props.constitution)*diceNumber);
}

    leveledHP(){
        if(this.props.userClass === "Barbarian" && this.props.level>1){
            const counter = this.props.level;
            const roll = this.rollD12(this.props.level-1)
            return(roll);
        }else{
            return(0);
        }
    }

    // {/*leveledHP(){*/}
    //     {/*try {*/}
    //         {/*switch (this.props.userClass){*/}
    //             {/*case "Barbarian":   //problem here is that the else statment prevents other classes from being rolled*/}
    //                     {/*const counter = this.props.level;*/}
    //                     {/*const roll = this.rollD12()*/}
    //                     {/*console.log("roll " + roll)*/}
    //                     {/*console.log("con mod " + this.abilityModifiers(this.props.constitution))*/}
    //                     {/*console.log(roll + this.abilityModifiers(this.props.constitution))*/}
    //                     {/*return(roll + this.abilityModifiers(this.props.constitution));*/}
    //                 {/*break;*/}
    //
    //             {/*case "Bard":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Bard");*/}
    //                 {/*}*/}
    //             {/*break;*/}
    //
    //             {/*case "Cleric":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Cleric");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Druid":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Druid");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Fighter":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Fighter");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Monk":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Monk");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Paladin":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Paladin");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Ranger":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Ranger");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Rogue":*/}
    //                 {/*if(this.props.level > 1) {*/}
    //                     {/*console.log("Rogue");*/}
    //                 {/*}*/}
    //                 {/*break;*/}
    //
    //             {/*case "Sorcerer":*/}
    //                 if(this.props.level > 1) {
    //                     console.log("Sorcerer");
    //                 }
    //                 break;
    //
    //             case "Warlock":
    //                 if(this.props.level > 1) {
    //                     console.log("Warlock");
    //                 }
    //                 break;
    //
    //             case "Wizard":
    //                 if(this.props.level > 1) {
    //                     console.log("Wizard");
    //                 }
    //                 break;
    //
    //             default:
    //                 break;
    //         }
    //     } catch (Exception) {
    //         console.log(Exception)
    //     }
    // }


    render(){
        // console.log(this.props)
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
                    <h3>HP: {this.props.hitPoints + this.abilityModifiers(this.props.constitution) + this.leveledHP()}</h3>
                </div>

                <ol className="statList">
                    <li>Strength <br/>
                        <label className="statNum">{this.props.strength}</label>
                        <br/>
                        <label className="modifier"> {this.abilityModifiers(this.props.strength)}</label>
                    </li>

                    <li>Dexterity <br/>
                        <label className="statNum">{this.props.dexterity}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.props.dexterity)}</label>
                    </li>

                    <li>Constitution <br/>
                        <label className="statNum">{this.props.constitution}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.props.constitution)}</label>
                    </li>

                    <li>Intelligence <br/>
                        <label className="statNum">{this.props.intelligence}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.props.intelligence)}</label>
                    </li>

                    <li>Wisdom <br/>
                        <label className="statNum">{this.props.wisdom}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.props.wisdom)}</label>
                    </li>

                    <li>Charisma <br/>
                        <label className="statNum">{this.props.charisma}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.props.charisma)}</label>
                    </li>
                </ol>

            </div>
        );
    }
}
export default Printable;