import React from 'react';
import {Blinker, Panel, ValueBar} from '../';

const BlinkerContainer = (props) => {
  if (props.isRandom) {
    return (
      <div>
        <Panel>
          <Blinker isRandom={props.isRandom}/>
          <ValueBar value={1000} />
        </Panel>
      </div>
    );
  }
  return (
    <div>
      <Panel>
        <Blinker isRandom={props.isRandom}/>
        <ValueBar isBlank={true} />
      </Panel>
    </div>
  );
}

export default BlinkerContainer;
