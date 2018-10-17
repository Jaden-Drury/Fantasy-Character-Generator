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
        }
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
    
    addDiceRollsTogether(){
        //const skillArray=[15, 14, 13, 12, 10, 8];

        var rollOne = this.rollDice();
        var rollTwo = this.rollDice();
        var rollThree = this.rollDice();

        var total = +rollOne + +rollTwo + +rollThree;

        console.log(total);

        // this.setState({str: skillArray[0]});
    }

    change(){
        const min = 2;
        const max = 8;
        const random = Math.floor(Math.random() * max-min + min);
        console.log(random);
    }


    render(){
        console.log(this.state.str)
        console.log(this.state.dex)
        console.log(this.state.int)
        console.log(this.state.con)
        console.log(this.state.wis)
        console.log(this.state.cha)
        // {this.setState({str: 5})}
        this.addDiceRollsTogether();
        return(<div className="ClassSkills">
        

            




        </div>);
    }
}
export default ClassSkills;