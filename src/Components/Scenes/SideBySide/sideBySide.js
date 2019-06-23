import React from 'react';
import {Component} from 'react';
import {Blinker} from '../../';
import './sideBySide.css';

class SideBySide extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <center className="container">
        <Blinker isRandom={true}/>
        <Blinker isRandom={false}/>
      </center>
    );
  }
}

export default SideBySide;
