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
          <Button text="-" onClick={this.props.valueDecrease} size="mini"/>
          <div className="text">{this.props.displayValue}{" s"}</div>
          <Button text="+" onClick={this.props.valueIncrease} size="mini"/>
        </div>
      </div>
    );
  }
}

export default ValueBar;
