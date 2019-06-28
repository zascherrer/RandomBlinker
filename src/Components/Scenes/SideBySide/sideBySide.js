import React from 'react';
import {Component} from 'react';
import {BlinkerContainer} from '../../';
import './sideBySide.css';

class SideBySide extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="container">
        <BlinkerContainer isRandom={true}/>
        <BlinkerContainer isRandom={false}/>
      </div>
    );
  }
}

export default SideBySide;