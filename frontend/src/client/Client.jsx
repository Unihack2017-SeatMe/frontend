import SocketIo from 'socket.io-client';
import { allRoomData } from '../../shared/socket-keys';
function setupSocket(socket, mapState) {
  socket.on(allRoomData, (all_room_data) => {
    mapState.all_room_state = all_room_data;
  });
}
export { setupSocket };
export default setupSocket;