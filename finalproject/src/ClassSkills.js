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

    render(){
        console.log(this.state.str)
        console.log(this.state.dex)
        console.log(this.state.int)
        console.log(this.state.con)
        console.log(this.state.wis)
        console.log(this.state.cha)
        // {this.setState({str: 5})}
        return(<div className="ClassSkills">

            




        </div>);
    }
}
export default ClassSkills;