/**
 * Created by jadendrury on 10/10/18.
 */
import React, { Component } from 'react';

class Barbarian extends Component {

    constructor(props){
        super(props);
        this.state = {
            hitDie: "1d12",
            hitPoints: 200,
        };
    }

    componentDidMount(){
        this.props.setHitPoints(this.state.hitPoints);
    }

    componentWillMount(){
        this.setState({hitPoints: this.rollHitDie()});

    }

    rollHitDie(){
        const min = 1;
        const max = 12;
        const randomNumber = Math.ceil(Math.random() * max-min + min);
        return(randomNumber);
    }

    render() {
        this.rollHitDie()
        return (

            <div className="Classes">

                <p> Barbarian </p>

            </div>
        )
    }
}

export default Barbarian;
