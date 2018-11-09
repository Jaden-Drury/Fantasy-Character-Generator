import React, { Component } from 'react';
import './App.css';

class Printable extends Component{

    constructor(props){
        super(props);
        this.state = {
            hitPoints: 0,
            charisma: this.props.charisma,
            strength: this.props.strength,
            constitution: this.props.constitution,
            wisdom: this.props.wisdom,
            intelligence: this.props.intelligence,
            dexterity: this.props.dexterity,
        };
    }

    componentDidMount(){
        this.baseHitPoints();
        this.racialBonuses();
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
            sum = sum + random;
        }
        return(sum + this.abilityModifiers(this.state.constitution)*diceNumber);
}

    rollD8(diceNumber){
        const min = 1;
        const max = 8;
        var sum = 0;
        var random = 0;
        for(var i=diceNumber;i>0;i--){
            random = Math.ceil(Math.random() * max-min + min);
            sum = sum + random;
        }
        return(sum + this.abilityModifiers(this.state.constitution)*diceNumber);
    }

    rollD10(diceNumber){
        const min = 1;
        const max = 10;
        var sum = 0;
        var random = 0;
        for(var i=diceNumber;i>0;i--){
            random = Math.ceil(Math.random() * max-min + min);
            sum = sum + random;
        }
        return(sum + this.abilityModifiers(this.state.constitution)*diceNumber);
    }

    rollD6(diceNumber){
        const min = 1;
        const max = 6;
        var sum = 0;
        var random = 0;
        for(var i=diceNumber;i>0;i--){
            random = Math.ceil(Math.random() * max-min + min);
            sum = sum + random;
        }
        return(sum + this.abilityModifiers(this.state.constitution)*diceNumber);
    }


    leveledHP(){
        if(this.props.userClass === "Barbarian" && this.props.level>1){
            const roll = this.rollD12(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Bard" && this.props.level>1){
            const roll = this.rollD8(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Cleric" && this.props.level>1){
            const roll = this.rollD8(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Druid" && this.props.level>1){
            const roll = this.rollD8(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Fighter" && this.props.level>1){
            const roll = this.rollD10(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Monk" && this.props.level>1){
            const roll = this.rollD8(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Paladin" && this.props.level>1){
            const roll = this.rollD10(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Ranger" && this.props.level>1){
            const roll = this.rollD10(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Rogue" && this.props.level>1){
            const roll = this.rollD8(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Sorcerer" && this.props.level>1){
            const roll = this.rollD6(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Warlock" && this.props.level>1){
            const roll = this.rollD8(this.props.level-1)
            return(roll);
        }
        else if(this.props.userClass === "Wizard" && this.props.level>1){
            const roll = this.rollD6(this.props.level-1)
            return(roll);
        }
        else{
            return(0);
        }
    }

    baseHitPoints(){
        try {
            switch (this.props.userClass){
                case "Barbarian":
                    // this.state.hitPoints = 12;
                    this.setState({hitPoints: 12})
                    break;
                case "Bard":
                    this.setState({hitPoints: 8})
                    break;
                case "Cleric":
                    this.setState({hitPoints: 8})
                    break;
                case "Druid":
                    this.setState({hitPoints: 8})
                    break;
                case "Fighter":
                    this.setState({hitPoints: 10})
                    break;
                case "Monk":
                    this.setState({hitPoints: 8})
                    break;
                case "Paladin":
                    this.setState({hitPoints: 10})
                    break;
                case "Ranger":
                    this.setState({hitPoints: 10})
                    break;
                case "Rogue":
                    this.setState({hitPoints: 8})
                    break;
                case "Sorcerer":
                    this.setState({hitPoints: 6})
                    break;
                case "Warlock":
                    this.setState({hitPoints: 8})
                    break;
                case "Wizard":
                    this.setState({hitPoints: 6})
                    break;
                default:
                    break;
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }

    racialBonuses(){
        try {
            switch (this.props.race){
                case "Dragonborn":
                    this.setState({strength: this.state.strength+2})
                    this.setState({charisma: this.state.charisma+1})
                    break;
                case "Dwarf":
                    this.setState({constitution: this.state.constitution+2})
                    break;
                case "Elf":
                    this.setState({dexterity: this.state.dexterity+2})
                    break;
                case "Gnome":
                    this.setState({intelligence: this.state.intelligence+2})
                    break;
                case "Half-Elf":
                    this.setState({charisma: this.state.charisma+2})
                    break;
                case "Half-Orc":
                    this.setState({strength: this.state.strength+2})
                    this.setState({constitution: this.state.constitution+1})
                    break;
                case "Halfling":
                    this.setState({dexterity: this.state.dexterity+2})
                    break;
                case "Human":
                    this.setState({dexterity: this.state.dexterity+1})
                    this.setState({strength: this.state.strength+1})
                    this.setState({constitution: this.state.constitution+1})
                    this.setState({intelligence: this.state.intelligence+1})
                    this.setState({charisma: this.state.charisma+1})
                    this.setState({wisdom: this.state.wisdom+1})
                    break;
                case "Tiefling":
                    this.setState({charisma: this.state.charisma+2})
                    this.setState({intelligence: this.state.intelligence+1})
                    break;
                default:
                    break;
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }
     

    render(){
        return(
            
            <div id="Printable">

            
                <h3 id="charSheet">Character Sheet</h3>

                <div className="wrapper">
                    <h3 className="names">Player Name: {this.props.playerName}</h3>
                    <h3 className="names">Character Name: {this.props.characterName}</h3>
                </div>

                <div className="wrapper">
                    <h3>Class: {this.props.userClass}</h3>
                    <h3>Race: {this.props.race}</h3>
                    <h3>Level: {this.props.level}</h3>
                    <h3>HP: {this.state.hitPoints + this.abilityModifiers(this.state.constitution) + this.leveledHP()}</h3>
                    <h3>Base AC: {this.abilityModifiers(this.state.dexterity) + 10}</h3>
                </div>

                <ol className="statList">
                    <li>Strength <br/>
                        <label className="statNum">{this.state.strength}</label>
                        <br/>
                        <label className="modifier"> {this.abilityModifiers(this.state.strength)}</label>
                    </li>

                    <li>Dexterity <br/>
                        <label className="statNum">{this.state.dexterity}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.state.dexterity)}</label>
                    </li>

                    <li>Constitution <br/>
                        <label className="statNum">{this.state.constitution}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.state.constitution)}</label>
                    </li>

                    <li>Intelligence <br/>
                        <label className="statNum">{this.state.intelligence}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.state.intelligence)}</label>
                    </li>

                    <li>Wisdom <br/>
                        <label className="statNum">{this.state.wisdom}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.state.wisdom)}</label>
                    </li>

                    <li>Charisma <br/>
                        <label className="statNum">{this.state.charisma}</label>
                        <br/>
                        <label className="modifier">{this.abilityModifiers(this.state.charisma)}</label>
                    </li>
                </ol>

                <p id="footnote">Note: The above scores, modifiers, and hp are not including the two point additional ability score improvements that occur at 4th, 8th, 12th, 16th, and 19th level.</p>

            </div>

            //  <button className="print" onClick={this.printDiv()}>
            //                Print Character Sheet
            // </button>
        );
    }
}
export default Printable;