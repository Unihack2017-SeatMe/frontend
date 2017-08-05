import React from 'react';
import { observer } from 'mobx-react';
import { tileLayer, map, LatLng, geoJSON} from 'leaflet';
import './FullnessMap.css';

import {mapState} from './state/dummyState';

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

    const style = {
        "color": "#ff7800",
        "weight": 10,
        "opacity": 0.65
    };
    geoJSON(mapState.all_room_geo_data[0], {style})
      .bindPopup((layer) => `${layer.feature.properties.fullness}`)
      .addTo(this.map);
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