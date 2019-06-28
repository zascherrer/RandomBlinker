import React from 'react';
import {Component} from 'react';
import {Button} from '../';
import './valueBar.css';

class ValueBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 404,
      displayValue: 0.4,
      valueChangeInterval: 100,
    }
  }

  componentWillMount() {
    if(this.props.value) {
      const displayValue = this.props.value / 1000;
      this.setState({value: this.props.value, displayValue: displayValue})
    }
    else {
      console.log("Value not supplied.");
    }
  }

  valueDecrease = () => {
    const newValue = this.state.value - this.state.valueChangeInterval;
    this.setState({value: newValue, displayValue: newValue / 1000});
  }

  valueIncrease = () => {
    const newValue = this.state.value + this.state.valueChangeInterval;
    this.setState({value: newValue, displayValue: newValue / 1000});
  }

  render() {
    if (this.props.isBlank) {
      return (
        <div className="blank" />
      );
    }
    return (
      <div className="bar">
        <div className="label">
          {this.props.valueType}
        </div>
        <div className="valueContainer">
          <Button text="-" onClick={this.valueDecrease} size="mini"/>
          <div className="text">{this.state.displayValue}{" s"}</div>
          <Button text="+" onClick={this.valueIncrease} size="mini"/>
        </div>
      </div>
    );
  }
}

export default ValueBar;
