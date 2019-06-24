import React from 'react';
import './panel.css';

const Panel = (props) => {
  return (
    <div className="panel">{props.children}</div>
  );
}

export default Panel;
