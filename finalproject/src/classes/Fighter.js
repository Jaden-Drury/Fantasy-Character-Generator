/**
 * Created by jadendrury on 10/10/18.
 */

import React, { Component } from 'react';

class Fighter extends Component {

    super(props){
        this.state = {

            hitDie: "1d10",
        }
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