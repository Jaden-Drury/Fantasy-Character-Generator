/**
 * Created by jadendrury on 10/12/18.
 */

import React, { Component } from 'react';
import './App.css';


class Printable extends Component{

render(){
    console.log(this.props)
    return(
        <div className="Printable">


            <p> This is the character sheet page </p>


        </div>
    );
}
}
export default Printable;