/**
 * Created by jadendrury on 10/10/18.
 */

import React, { Component } from 'react';

class Wizard extends Component {
    constructor(props){
        super(props);
        this.state = {

            hitDie: "1d6",
            hitPoints: 0,
        }
    }

    componentDidMount(){
        this.props.setHitPoints(this.state.hitPoints);
    }

    componentWillMount(){
        this.setState({hitPoints: this.rollHitDie()});

    }

    rollHitDie(){
        const min = 1;
        const max = 6;
        const randomNumber = Math.ceil(Math.random() * max-min + min);
        return(randomNumber);
    }

    render() {
        return (

            <div>

                {/* <p> Wizard </p> */}

            </div>
        )
    }
}

export default Wizard;