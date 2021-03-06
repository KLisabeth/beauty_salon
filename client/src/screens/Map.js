import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
 

function Maps() {
  

   const position =[50.848707, 4.378726]
 
    

  return (
    <div id="mapid">
    <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
      </div>
  );
}

export default Maps;
