/**
 * Created by jadendrury on 10/21/18.
 */

import React, { Component } from 'react';
import '../App.css';
import Fail from './fail'
import Pass from './pass'

//testing set up this way is useful as desierable as it is easy for state and props to not get
//passed properly or correctly, as well as it's possible for them to get deformed along the way
//these tests can check if the user input is actually getting passed correctly if at all

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

    DropNotNull(){
        if(this.props.userClass === null || this.props.race === null || this.props.level === null){ //this is a example of how testing is set up
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

    SkillsNotZero(){
        if(this.props.strength === 0 || this.props.intelligence === 0 || this.props.constitution === 0 || this.props.wisdom === 0 || this.props.dexterity === 0 || this.props.charisma === 0 ){
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
                {this.DropNotNull()}
                {this.SkillsNotZero()}

            </div>
        );
    }
}
export default ReactTest;