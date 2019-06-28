import React from 'react';
import {Component} from 'react';
import {Button} from '../';
import './valueBar.css';

class ValueBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 404,
      valueChangeInterval: 100,
    }
  }

  componentWillMount() {
    if(this.props.value) {
      this.setState({value: this.props.value})
    }
    else {
      console.log("Value not supplied.");
    }
  }

  valueDecrease = () => {
    const newValue = this.state.value - this.state.valueChangeInterval;
    this.setState({value: newValue});
  }

  valueIncrease = () => {
    const newValue = this.state.value + this.state.valueChangeInterval;
    this.setState({value: newValue});
  }

  render() {
    if (this.props.isBlank) {
      return (
        <div className="blank" />
      );
    }
    return (
      <div className="bar">
        <Button text="-" onClick={this.valueDecrease} size="mini"/>
        <div className="text">{this.state.value}</div>
        <Button text="+" onClick={this.valueIncrease} size="mini"/>
      </div>
    );
  }
}

export default ValueBar;
