/**
 * Created by jadendrury on 10/10/18.
 */


import React, { Component } from 'react';

class Druid extends Component {

    super(props){
        this.state = {

            hitDie: "1d8",
            hitPoints: 0,
        }
    }

    rollHitDie(){
        const min = 1;
        const max = 8;
        const randomNumber = Math.ceil(Math.random() * max-min + min);
        return(randomNumber);
    }

    setHitPoints(){
        this.hitPoints = rollHitDie();
    }

    render() {
        return (

            <div>

                <p> Druid </p>

            </div>
        )
    }
}

export default Druid;