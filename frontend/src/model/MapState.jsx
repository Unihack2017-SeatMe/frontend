import { observable, computed } from 'mobx';
import {LOCATIONS} from '../config';

class MapState {
  @observable
  all_room_state = null;
  
  constructor(initial_room_data) {
    this.all_room_state = initial_room_data;
  }

  @computed
  get all_room_data() {
    return this.all_room_state;
  }

  @computed
  get all_room_geo_data() {
    return this.all_room_data.map(({id, fullness}) => ({
      type: 'Feature',
      properties: {
        name: LOCATIONS[id].name,
        fullness
      },
      geometry: {
        type: 'Polygon',
        coordinates: [LOCATIONS[id].coordinates]
      }
    }));
  }
}
export { MapState };
export default MapState;
