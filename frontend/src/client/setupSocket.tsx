import { allRoomDataKey, roomDataKey } from '../shared/socket-keys';
function setupSocket(socket, mapState) {
  socket.on(allRoomDataKey, (allRoomData) => {
    mapState.setAllRoomData(allRoomData);
  });
  socket.on(roomDataKey, (data) => {
    mapState.addRoomData(data);
  })
}
export { setupSocket };
export default setupSocket;
