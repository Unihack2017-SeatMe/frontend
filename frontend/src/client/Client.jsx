import { allRoomData, roomData } from '../../shared/socket-keys';
function setupSocket(socket, mapState) {
  socket.on(allRoomData, (all_room_data) => {
    mapState.all_room_state = all_room_data;
  });
  socket.on(roomData, (data) => {
    mapState.addRoomData(data);
  })
}
export { setupSocket };
export default setupSocket;