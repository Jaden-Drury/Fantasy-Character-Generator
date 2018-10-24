/**
 * Created by jadendrury on 10/10/18.
 */

import React, { Component } from 'react';

class Fighter extends Component {

    super(props){
        this.state = {

            hitDie: "1d10",
            hitPoints: 0,
        }
    }

    rollHitDie(){
        const min = 1;
        const max = 10;
        const randomNumber = Math.ceil(Math.random() * max-min + min);
        return(randomNumber);
    }

    setHitPoints(){
        this.hitPoints = rollHitDie();
    }

    render() {
        return (

            <div>

                <p> Fighter </p>

            </div>
        )
    }
}

export default Fighter;