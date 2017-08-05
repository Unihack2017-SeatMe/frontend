import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { tileLayer, map, LatLng, geoJSON} from 'leaflet';
import './FullnessMap.css';

import PopUp from './PopUp';
import {mapState} from './shared/state/dummyState';
@observer
class FullnessMap extends React.Component {
  componentDidMount() {
    this.map = map(this.mapContainer, {
      center: new LatLng(-37.8163921, 144.9649125),
      zoom: 18,
      maxZoom: 20
    });

    this.tileLayer = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; // TODO</a>'
    }).addTo(this.map);

    geoJSON(mapState.allRoomGeoData, {
      style: (feature) => {
        const {capacity, count} = feature.properties;
        console.log(`rgb(${Math.floor(count / capacity * 255)}, 0, 0)`);
        return {
          color: `rgb(${Math.floor(count / capacity * 255)}, 0, 0)`,
          weight: 10,
          opacity: 0.65
        }
      }
    }).bindPopup((layer) => {
      const {name, id} = layer.feature.properties;
      const ref = document.createElement('div');
      ReactDOM.render(<PopUp id={id} name={name}/>, ref);
      return ref;
    }).addTo(this.map);
  }

  render() {
    return (
      <div
        className="map-container"
        ref={(mapContainer) => { this.mapContainer = mapContainer; }}
      >
      </div>
    );
  }
}
export default FullnessMap;
export { FullnessMap };