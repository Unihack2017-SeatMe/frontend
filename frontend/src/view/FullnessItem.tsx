import * as React from 'react';
import { observer } from 'mobx-react';
import { mapState } from '../state/frontend-state';
import { RoomData } from '../shared/model/RoomData';
import ActionInfo from 'material-ui/svg-icons/action/info'; 
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
const FullnessItem = observer(({ id }) => {
  const roomData: RoomData = mapState.allRoomState.get(id);
  return (  
    <ListItem 
      leftAvatar={<Avatar backgroundColor={roomData.fullnessColor}/>}
      primaryText={roomData.roomName}
      secondaryText={`${(roomData.fullness * 100).toFixed(2)}%`}
    />
  );
});
export { FullnessItem };
export default FullnessItem;