import React /*{ Component }*/ from 'react';
import ReactMapGL, { Marker, FlyToInterpolator, LinearInterpolator, NavigationControl, Popup} from 'react-map-gl';
//import { StaticMap } from 'react-map-gl';
//import { locationOfMarkers } from './util/placesAPI';
import * as VenueAPI from './util/infoMapAPI';
import 'mapbox-gl/dist/mapbox-gl.css'; 
//import * as markers from './util/placesAPI';
import './App.css';
import {ZoomControl } from "react-mapbox-gl";
//import ReactModal from 'react-modal';
import SimpleModal from './InfoWindow';
import InfoVenue from './InfoVenue';
import CityInfo from './city-info';
import CityPin from './city-pin';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import PickedVenue from './PickedVenue';


let viewportwidth;
let viewportheight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth !== 'undefined') {
  viewportwidth = window.innerWidth;
    viewportheight = window.innerHeight;
}


class Map extends React.Component {
  
//state holding all the provided checks and info for rendering maps
  state = {
    viewport: {
      width: viewportwidth,
      height: viewportheight,
      latitude: 51.5074,
      longitude: 0.1278,
      zoom: 8,
      
    },
    loaded: false,
    showModal: false,
    popupInfo: null,
    chosenPOP: null
    
 
  };
  

  
  customStyles = {
    content: {
      
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };


  //this function gets the data from artvenue and pushes each data to locaitonofPlaces array and it will get the data before render happens
 componentWillMount(){
   VenueAPI.getVenue().then(()=>
  
     this.setState({ loaded: true,
    
            
    })
  );
   
  
 }

 _pushingNames = (city, index)=>{
   this.options.push(city.name);
 }


 //this function is borrowed from uber react map-gl for marking the points

  _renderCityMarker = (city, index) => {
    return (
      <Marker key={`marker-${index}`}
        longitude={city.location.lng}
        latitude={city.location.lat} >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
       
      </Marker>

      
      
    
    );
  }
  _choosingvenue = (chosenVenue, place ) => {
    //get 
    console.log(place.name)
    chosenVenue === place.name ? this.setState({chosenPOP: place}): this.setState({chosenPOP: null})

  }
  // this function is for pop up to function properly again genrated from uber react map gl
  _renderPopup() {
    const { popupInfo } = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.location.lng}
        latitude={popupInfo.location.lat}
        onClose={() => this.setState({ popupInfo: null })} >
        <CityInfo info={popupInfo} />
        
      </Popup>
    );
  }

  _renderVenue() {
    const { chosenPOP } = this.state;
       console.log(chosenPOP);
    return chosenPOP && (
      <Popup tipSize={5}
        anchor="top"
        longitude={chosenPOP.location.lng}
        latitude={chosenPOP.location.lat}
        onClose={() => this.setState({ chosenPOP: null })} >
        <CityInfo info={chosenPOP} />

      </Popup>
    );
  }

  render() {
    
    return (
      <div className="container">
        
           
      {/*<div className="search-Venue">
      
          <div className="search-venue-input-wrapper">
          
          <input type="text" value={this.state.query} onChange={(event) => this.getQuery(event.target.value)} placeholder="Search by title or author" />

        </div>
    </div>*/}
      <div className="map">
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})
         
          // call `setState` and use the state to update the map.
        }

        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
     //put you own mapbox token below
        mapboxApiAccessToken={''}
      >
      
    
 {VenueAPI.locationofPlaces.map(this._renderCityMarker) }
 
           
            {this._renderPopup()}
            {
              this.state.loaded === true ?
                (<PickedVenue choosingvenue={this._choosingvenue} venue={VenueAPI.locationofPlaces} />) : (<div>loading</div>)

            }
            {this._renderVenue()}
    
    
      
        <div style={{ position: 'absolute', right: 0 }}>
          <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
        </div>
       
      </ReactMapGL>
      </div>
      
      </div>
    )
 
}

}
export default Map

