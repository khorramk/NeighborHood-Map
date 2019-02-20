import React /*{ Component }*/ from 'react';
import ReactMapGL, { Marker, FlyToInterpolator, NavigationControl, Popup} from 'react-map-gl';
//import { StaticMap } from 'react-map-gl';
//import { locationOfMarkers } from './util/placesAPI';
import * as VenueAPI from './util/infoMapAPI';
import CityInfo from './city-info';
import CityPin from './city-pin';
import PickedVenue from './PickedVenue';
import './App.css';


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
  ).catch(()=>{
    this.setState({loaded: false})
  })
   
  
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
    let tab = this.state.loaded ? { tabIndex: 0 }: {};
    return (
      <div className="grid full-height full-width area" role="heading"  >
        <div className="one full-width title-color put-center text-color">
          <h1 className="header">art & gallary venues</h1>
          <h2> zoom in to get started</h2>
        </div>
           
    {   this.state.loaded === true ? 
      (
      <ReactMapGL {...tab}  id="map" className="full-width two"
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})
         
          // call `setState` and use the state to update the map.
        }
       style={{
        width: viewportwidth, height: viewportheight }}

        
        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
     //put you own mapbox token below
              mapboxApiAccessToken={'pk.eyJ1Ijoia2hvcnJhbSIsImEiOiJjamsyZXQyeWQwcGJwM2ptdDhndnNxZ3dsIn0.cAdkhMm3Xg9_3b2obaokMA'}
            tabIndex="-1"
      >
      
    
 {VenueAPI.locationofPlaces.map(this._renderCityMarker) }
 
           
            {this._renderPopup()}
            {
              this.state.loaded === true ?
                (
                
                <PickedVenue className="abs-pos top full-width" choosingvenue={this._choosingvenue} venue={VenueAPI.locationofPlaces} />
                
                ) : (<div>loading</div>)

            }
            {this._renderVenue()}
    
    
      
        <div style={{ position: 'fixed', left: 0 }}>
          <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
        </div>
       
      </ReactMapGL>
      
      ) : (<div tabIndex="0">
      
      <h1>oh no! limit is reached or need to put client details</h1>
      <h2>contact the developer of this page for more details</h2>
        <h3>email: khorramk.kbsk@gmail.com</h3>
      </div>)}
      
      </div>
    )
 
}

}
export default Map

