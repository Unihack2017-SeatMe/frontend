import React from 'react';
import { observer } from 'mobx-react';
import { tileLayer, map, LatLng} from 'leaflet';
import './FullnessMap.css';
const initialLocation = new LatLng(10, 10);
@observer
class FullnessMap extends React.Component {
  componentDidMount() {
    this.map = map(this.mapContainer).setView(initialLocation, 13);
    this.tileLayer = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; // TODO</a>'
    }).addTo(this.map);
  }
  render() {
    return <div className="map-container" ref={(mapContainer) => { this.mapContainer = mapContainer; }}></div>
  }
}
export default FullnessMap;
export { FullnessMap };