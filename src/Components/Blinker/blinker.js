import React from 'react';
import {Component} from 'react';
import {Button, Box} from '../'
import './blinker.css'

class Blinker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blinkerOn: null,
      blinkTimerId: null,
      blinkerChangeTimerId: null,
      timeBetweenBlinks: 1000
    };
  }

  componentWillMount() {
    if (this.props.isRandom) {
      this.setState({randomLabel: "Random"});
    }
    else {
      this.setState({randomLabel: "Standard"});
    }
  }

  blink = () => {
    this.turnOn();
  }

  randomizeTimers = () => {
    const minimumPeriod = this.props.minimumPeriod;
    const maximumPeriod = this.props.maximumPeriod;
    const randomPeriod = minimumPeriod + Math.random() * (maximumPeriod - minimumPeriod);

    console.log("The set period is: " + randomPeriod);

    this.setState({timeBetweenBlinks: randomPeriod});
  }

  turnOn = () => {
    this.setState({blinkerOn: true});
    const timeUntilTurnOff = this.state.timeBetweenBlinks;

    const blinkerChangeTimerId = setTimeout(this.turnOff, timeUntilTurnOff);
    this.setState({blinkerChangeTimerId: blinkerChangeTimerId})
  }

  turnOff = () => {
    this.setState({blinkerOn: false});

    if (this.props.isRandom) {
      this.randomizeTimers();
    }

    const blinkTimerId = setTimeout(this.turnOn, this.state.timeBetweenBlinks);
    this.setState({blinkTimerId: blinkTimerId});
  }

  stopBlinker = () => {
    clearInterval(this.state.blinkTimerId);
    clearTimeout(this.state.blinkerChangeTimerId);
    this.setState({blinkerOn: null});
  }

  render() {
    if (this.state.blinkerOn === null) {
      return (
        <div className="container">
          <Button text ="Start blinker" onClick={this.blink} />
          <Box />
          <p>{this.state.randomLabel}</p>
        </div>
      )
    }
    else if (this.state.blinkerOn) {
      return (
        <div className="container">
          <Button text="Stop blinker" onClick={this.stopBlinker} />
          <Box isActive={true} />
          <p>{this.state.randomLabel}</p>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <Button text="Stop blinker" onClick={this.stopBlinker} />
          <Box isActive={false} />
          <p>{this.state.randomLabel}</p>
        </div>
      );
    }
  }
}

export default Blinker;
