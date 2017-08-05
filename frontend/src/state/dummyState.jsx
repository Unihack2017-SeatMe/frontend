import { MapState } from '../model/MapState';
let current_id = 0;
let current_fullness = 30;
const mapState = new MapState(
  [{}, {}, {}, {}, {}].map(
    (item) => {
      item.id = current_id++;
      current_fullness += 10;
      item.fullness = current_fullness;
      return item;
    }
  )
);
export { mapState };