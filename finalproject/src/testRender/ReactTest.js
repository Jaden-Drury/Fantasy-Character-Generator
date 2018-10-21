/**
 * Created by jadendrury on 10/21/18.
 */

import React, { Component } from 'react';
import '../App.css';
import Fail from './fail'
import Pass from './pass'


class ReactTest extends Component{

    constructor(props){
        super(props);
        this.state = {
            testState: "false",
        };
    }

    setTestState(){
        if(this.props.playerName === null){
            this.setState({testState: "false"})
        }
    }

    NameNotNull(){
        if(this.props.playerName === null || this.props.characterName === null){ //this is a example of how testing is set up
            console.log("Test is False and Fails")
            return(
                <Fail/>
            )
        }else{
            console.log("Test is True and Passes")
            return(
                <Pass/>
            )

        }
    }

    render(){
        this.NameNotNull()
        return(

            <div className="ReactTest">

                {this.NameNotNull()}

            </div>
        );
    }
}
export default ReactTest;