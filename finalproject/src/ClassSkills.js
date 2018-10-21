import React, { Component } from 'react';

class ClassSkills extends Component {

    constructor(props){
        super(props);
        this.state = {
            d6: 0,
            strength: 1,
            dexterity: 2,
            constitution: 3,
            intelligence: 4,
            wisdom: 5,
            charisma: 6,
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

export default ClassSkills;