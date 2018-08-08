import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
//import { StaticMap } from 'react-map-gl';
import places from './util/placesAPI'
import './App.css';

let viewportwidth;
let viewportheight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth !== 'undefined') {
  viewportwidth = window.innerWidth;
    viewportheight = window.innerHeight;
}



class Map extends Component {
  

  state = {
    viewport: {
      width: viewportwidth,
      height: viewportheight,
      latitude: 21.3890824,
      longitude: 39.85791180000001,
      zoom: 8
    }
  };

 

 

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})
         
          // call `setState` and use the state to update the map.
        }
        mapboxApiAccessToken={'pk.eyJ1Ijoia2hvcnJhbSIsImEiOiJjamsyZXQyeWQwcGJwM2ptdDhndnNxZ3dsIn0.cAdkhMm3Xg9_3b2obaokMA'}
      >
        <Marker latitude={places.hotels.lat} longitude={places.hotels.long} offsetLeft={-20} offsetTop={-10}>
          <div className="marker"></div>
        </Marker>
        <Marker latitude={places.marketplace.lat} longitude={places.marketplace.long} offsetLeft={-20} offsetTop={-10}>
          <div className="marker"></div>
        </Marker>
        <Marker latitude={places.eatingPlace.lat} longitude={places.eatingPlace.long} offsetLeft={-20} offsetTop={-10}>
          <div className="marker"></div>
        </Marker>

      </ReactMapGL>
 
    );
  }
}
export default Map

