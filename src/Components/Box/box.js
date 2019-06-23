import React from 'react';
import './box.css';

const Box = (props) => {
  if (props.isActive) {
    return (
      <div className= "Box on" />
    )
  }
  else {
    return (
      <div className="Box off"/>
    );
  }

}

export default Box;
