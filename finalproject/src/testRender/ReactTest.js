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
        if ( this.TestForLowestScore(this.props.HP) && this.TestForLowestScore(this.props.strength) && this.TestForLowestScore(this.props.intelligence) && this.TestForLowestScore(this.props.constitution) && this.TestForLowestScore(this.props.wisdom) && this.TestForLowestScore(this.props.dexterity) && this.TestForLowestScore(this.props.charisma)) {
            console.log("All skills are equal to or greater than the lowest posible per level       i.e level 1 = 8, level 2 = 16")
            return(
                <Pass/>
            )
        }
        console.log("There is one skill that is not equal to or greater than the minimum possible score")
        return (
            <Fail/>
        )
    }

    // This is a helper function to test for the lowest possible score per level
    TestForLowestScore(skill) {
        if ( skill >= (8*this.props.level) ) {
            return true;
        }

        if ( skill === this.props.HP ) {
            if ( this.props.HP >= 1 ) {
                return true;
            }
        }
        
        return false;
    }

    render(){
        this.NameNotNull()
        return(

            <div className="ReactTest">

                {/* {this.NameNotNull()} */}
                {/* {this.DropNotNull()} */}
                {this.SkillsNotZero()}

            </div>
        );
    }
}
export default ReactTest;