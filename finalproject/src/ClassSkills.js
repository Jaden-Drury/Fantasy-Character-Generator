/**
 * Created by jadendrury on 10/12/18.
 */
import React, { Component } from 'react';


class ClassSkills extends Component {

    constructor(props){
        super(props);
        this.state = {
            d6: 0,
        }
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
        return(<div className="ClassSkills">







        </div>);
    }
}
export default ClassSkills;