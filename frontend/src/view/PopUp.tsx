import * as React from 'react';
import {observer} from 'mobx-react';
import './PopUp.css';
import {mapState} from '../state/frontend-state';

const PopUp = observer(({id}) => {
  const roomData = mapState.allRoomState.get(id);
  return (
    <div>
      <h1 className="popup-heading">{roomData.roomName}</h1>
      <p className="popup-detail"><strong>No. People: </strong>{roomData.count}</p>
      <p className="popup-detail"><strong>Capacity: </strong>{roomData.capacity}</p>
    </div>
  );
});

export { PopUp };
export default PopUp;
