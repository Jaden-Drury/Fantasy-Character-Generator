/**
 * Created by jadendrury on 12/1/18.
 */
import React, { Component } from 'react';

class LevelCharacterInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            basicStatArray:[15, 14, 13, 12, 10, 8],
        }
    }

    componentWillMount(){
        this.setState({strength: this.getRandomScore(this.state.basicStatArray)});
        this.setState({dexterity: this.getRandomScore(this.state.basicStatArray)});
        this.setState({constitution: this.getRandomScore(this.state.basicStatArray)});
        this.setState({intelligence: this.getRandomScore(this.state.basicStatArray)});
        this.setState({wisdom: this.getRandomScore(this.state.basicStatArray)});
        this.setState({charisma: this.getRandomScore(this.state.basicStatArray)});
    }

    componentDidMount(){
        this.props.setStr(this.state.strength);
        this.props.setDex(this.state.dexterity);
        this.props.setCon(this.state.constitution);
        this.props.setInt(this.state.intelligence);
        this.props.setWis(this.state.wisdom);
        this.props.setCha(this.state.charisma);
    }

    getRandomScore(array){
        var num = Math.floor(Math.random() * array.length);
        var statValue = array[num]
        array.splice(num, 1)
        return statValue;
    }

    rollDice(){
        const min = 1;
        const max = 6;
        const randomNumber = Math.ceil(Math.random() * max-min + min);
        return(randomNumber);
    }

    addDiceRollsTogether(){
        var rollOne = this.rollDice();
        var rollTwo = this.rollDice();
        var rollThree = this.rollDice();
        var total = +rollOne + +rollTwo + +rollThree;
        return total;
    }

    render(){
        return(<div className="ClassSkills"></div>);
    }
}

export default LevelCharacterInput;