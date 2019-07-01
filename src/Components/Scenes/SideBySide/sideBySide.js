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
      <div>
        <div className="container">
          <BlinkerContainer isRandom={true}/>
          <BlinkerContainer isRandom={false}/>
        </div>
        <div className="description-box">
          <h3>Instructions</h3>
          <p>The blinker on the left is a randomized blinker with two adjustable settings called the lower limit and the upper limit, both of which adjust the time between blinks.</p>
          <p>The lower limit is the minimum time between blinks, while the upper limit is the maximum time between blinks. Both values are listed in seconds.</p>
          <p>Every time the randomized blinker blinks, it chooses a random duration between these two limits. For comparison, the time between blinks on a standard blinker is one second.</p>
          <p>The lower limit cannot go below 0 seconds and cannot go higher than the upper limit. The upper limit can't go lower than the lower limit, but can be raised as high as you like.</p>
          <p>When you're ready to start, click the "Start Blinker" button above one or both of the blinkers. You can stop either of the blinkers with the same buttons.</p>
        </div>
      </div>
    );
  }
}

export default SideBySide;
