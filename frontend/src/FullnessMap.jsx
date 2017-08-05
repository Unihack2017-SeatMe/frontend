import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { tileLayer, map, LatLng, geoJSON} from 'leaflet';
import './FullnessMap.css';

import PopUp from './PopUp';
import {mapState} from './frontend-state';

@observer
class FullnessMap extends React.Component {
  constructor(props) {
    super(props);
    this.tileLayer = this.tileLayer = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; // TODO</a>'
    });
    this.roomLayer = geoJSON([], {
        style: (feature) => {
          const {capacity, count} = feature.properties;
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
      })
  }

  componentDidMount() {
    this.map = map(this.mapContainer, {
      center: new LatLng(-37.8163921, 144.9649125),
      zoom: 18,
      maxZoom: 20
    });
    this.tileLayer.addTo(this.map);
    this.roomLayer.addTo(this.map);
  }

  render() {
    this.roomLayer.clearLayers();
    this.roomLayer.addData(mapState.allRoomGeoData);
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