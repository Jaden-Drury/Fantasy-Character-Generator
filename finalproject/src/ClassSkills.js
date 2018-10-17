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
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
        }
    }

    setScores(){
        const skillArray=[15, 14, 13, 12, 10, 8];
        // this.setState({str: skillArray[0]});
    }

    rollDice(){
        const min = 1;
        const max = 7;
        const random = Math.floor(Math.random() * max-min + min);
        console.log(random);
    }

    componentDidMount(){
        const min = 2;
        const max = 8;
        const random = Math.floor(Math.random() * max-min + min);
        console.log(random);
    }


    render(){
        this.setScores()
        console.log(this.state.str)
        return(<div className="ClassSkills">


        <h1>CLASS SKILLS</h1>




        </div>);
    }
}
export default ClassSkills;