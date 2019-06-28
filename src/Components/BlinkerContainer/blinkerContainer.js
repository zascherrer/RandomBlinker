import React from 'react';
import {Component} from 'react';
import {Blinker, Panel, ValueBar} from '../';

class BlinkerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumPeriod: 500,
      maximumPeriod: 1500,
    }
  }

  componentWillMount() {

  }

  render() {
    if (this.props.isRandom) {
      return (
        <div>
          <Panel>
            <Blinker
              isRandom={this.props.isRandom}
              minimumPeriod={this.state.minimumPeriod}
              maximumPeriod={this.state.maximumPeriod}
            />
            <ValueBar value={1000} valueType="Lower Threshold"/>
            <ValueBar value={1000} valueType="Upper Threshold"/>
          </Panel>
        </div>
      );
    }
    return (
      <div>
        <Panel>
          <Blinker isRandom={this.props.isRandom}/>
          <ValueBar isBlank={true} />
          <ValueBar isBlank={true} />
        </Panel>
      </div>
    );
  }
}

export default BlinkerContainer;
