import React from 'react';
import './button.css';

const Button = (props) => {
  if (props.size === "mini") {
    return (
      <button onClick = {props.onClick} className="miniButton">
        {props.text}
      </button>
    );
  }
  return (
    <button onClick = {props.onClick} className="button">
      {props.text}
    </button>
  )
}

export default Button;
