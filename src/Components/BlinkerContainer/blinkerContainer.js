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
    if (this.state.minimumPeriod >= 100) {
      const newMinimumPeriod = this.state.minimumPeriod - this.state.valueChangeInterval;
      this.setState({minimumPeriod: newMinimumPeriod});
    }
    else {
      console.log("Minimum period cannot be decreased any further.");
    }
  }

  minimumPeriodIncrease = () => {
    if (this.state.minimumPeriod < this.state.maximumPeriod) {
      const newMinimumPeriod = this.state.minimumPeriod + this.state.valueChangeInterval;
      this.setState({minimumPeriod: newMinimumPeriod});
    }
    else {
      console.log("Minimum period cannot be raised higher than maximum period");
    }
  }

  maximumPeriodDecrease = () => {
    if (this.state.maximumPeriod > this.state.minimumPeriod) {
      const newMaximumPeriod = this.state.maximumPeriod - this.state.valueChangeInterval;
      this.setState({maximumPeriod: newMaximumPeriod});
    }
    else {
      console.log("Maximum period cannot be lowered below minimum period");
    }
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
