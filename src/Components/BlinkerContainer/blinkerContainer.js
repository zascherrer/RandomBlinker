import React from 'react';
import {Blinker, Panel} from '../';

const BlinkerContainer = (props) => {
  return (
    <div>
      <Panel>
        <Blinker isRandom={props.isRandom}/>
      </Panel>
    </div>
  );
}

export default BlinkerContainer;
