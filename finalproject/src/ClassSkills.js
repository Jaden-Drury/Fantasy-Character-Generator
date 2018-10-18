/**
 * Created by jadendrury on 10/12/18.
 */
import React, { Component } from 'react';


class ClassSkills extends Component {

    //[15, 14, 13, 12, 10, 8] the standard ability score array

    constructor(props){
        super(props);
        this.state = {
            d6: 0,
            str: 1,
            dex: 2,
            con: 3,
            int: 4,
            wis: 5,
            cha: 6,
            statArray:[15, 14, 13, 12, 10, 8],
        }
    }

    componentWillMount(){
        // var statArray = [15, 14, 13, 12, 10, 8];
        this.setState({str: this.getRandomScore(this.state.statArray)})
        console.log("str set")
        this.setState({dex: this.getRandomScore(this.state.statArray)})
        console.log("dex set")
        this.setState({con: this.getRandomScore(this.state.statArray)})
        console.log("con set")
        this.setState({int: this.getRandomScore(this.state.statArray)})
        console.log("int set")
        this.setState({wis: this.getRandomScore(this.state.statArray)})
        console.log("wis set")
        this.setState({cha: this.getRandomScore(this.state.statArray)})
        console.log("cha set")
    }

    componentDidMount(){
        this.props.setStr(this.state.str);
        this.props.setDex(this.state.dex);
        this.props.setCon(this.state.con);
        this.props.setInt(this.state.int);
        this.props.setWis(this.state.wis);
        this.props.setCha(this.state.cha);
    }


    rollDice(){
        const min = 1;
        const max = 6;
        const random = Math.ceil(Math.random() * max-min + min);
        return(random);
    }

    getRandomScore(array){
        var num = Math.floor(Math.random() * array.length);
        var statValue = array[num]
        console.log(array)
        array.splice(num, 1)
        console.log(array)

        return statValue;
    }

    addDiceRollsTogether(){

        var rollOne = this.rollDice();
        var rollTwo = this.rollDice();
        var rollThree = this.rollDice();

        var total = +rollOne + +rollTwo + +rollThree;

        console.log(total);
    }


    render(){
        return(<div className="ClassSkills">







        </div>);
    }
}
export default ClassSkills;