import * as React from 'react';
import {observer} from 'mobx-react';
import './PopUp.css';
import {mapState} from '../state/frontend-state';

const PopUp = observer(({id}) => {
  const roomData = mapState.allRoomState.get(id);
  return (
    <div>
      <h1><strong>{`name: ${roomData.roomName}`}</strong></h1>
      <div>{`count: ${roomData.count}`}</div>
      <div>{`capacity: ${roomData.capacity}` }</div>
    </div>
  );
});

export { PopUp };
export default PopUp;
