import { observable } from 'mobx';
class MapState {
  get all_room_data() {
    let current_id = 0;
    let current_fullness = 30;
    return [{}, {}, {}, {}, {}].map((item) => {
      item.id = current_id++;
      current_fullness += 10;
      item.fullness = current_fullness;
      return item;
    });
  }
}
export { MapState };
export default MapState;
