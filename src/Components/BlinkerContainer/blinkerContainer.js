import React from 'react';
import {Component} from 'react';
import {Blinker, Panel, ValueBar} from '../';

class BlinkerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumPeriod: 500,
      maximumPeriod: 1500,
      valueChangeInterval: 100,
    }
  }

  componentWillMount() {

  }

  minimumPeriodDecrease = () => {
    const newMinimumPeriod = this.state.minimumPeriod - this.state.valueChangeInterval;
    this.setState({minimumPeriod: newMinimumPeriod});
  }

  minimumPeriodIncrease = () => {
    const newMinimumPeriod = this.state.minimumPeriod + this.state.valueChangeInterval;
    this.setState({minimumPeriod: newMinimumPeriod});
  }

  maximumPeriodDecrease = () => {
    const newMaximumPeriod = this.state.maximumPeriod - this.state.valueChangeInterval;
    this.setState({maximumPeriod: newMaximumPeriod});
  }

  maximumPeriodIncrease = () => {
    const newMaximumPeriod = this.state.maximumPeriod + this.state.valueChangeInterval;
    this.setState({maximumPeriod: newMaximumPeriod});
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
            <ValueBar
              displayValue={this.state.minimumPeriod / 1000}
              valueType="Lower Threshold"
              valueDecrease={this.minimumPeriodDecrease}
              valueIncrease={this.minimumPeriodIncrease}
            />
            <ValueBar
              displayValue={this.state.maximumPeriod / 1000}
              valueType="Upper Threshold"
              valueDecrease={this.maximumPeriodDecrease}
              valueIncrease={this.maximumPeriodIncrease}
            />
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
