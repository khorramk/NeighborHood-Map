# Arts and entertainment map
This is my Own project making custom style Maps. the purpose is to show most popolar :circus_tent: entertainment places in London

## motivation

i wanted to create and test for user to navigate to a list of option provided in the map.

i like geocanvas drawing specially in programming.


## build satatus

this project was bootstrapped with react.
in addition it has other dependencies:

1. react-map-gl can be found the documentation on https://uber.github.io/react-map-gl/#/
2. also popular module in http://alex3165.github.io/react-mapbox-gl/
3. also used foursqaure API to get relevant information
4. and mainly used mapbox to render the maps.

## Code style

in this project i mainly used ES6 to implement the features however you can converted to ES5 and older just by going to Babel.js website.

## screenshots

## Tech/framework used

bulit with:
 react component

## Code example

```
class Map extends React.Component {
  

  state = {

      //note: here you need to set the viewport so you can zoom in or out
    viewport: {
      width: viewportwidth,
      height: viewportheight,
      latitude: 51.5074,
      longitude: 0.1278,
      zoom: 8,
      
    },
    loaded: false,
    showModal: false,
    popupInfo: null
 
  };

  customStyles = {
    content: {
      //make any custom styles in here using object key values
    }
  };


  //this function gets the data from artvenue and pushes each data to locaitonofPlaces array
  

 componentWillMount(){
   VenueAPI.getVenue().then(()=>
  
     this.setState({ loaded: true,
    
            
    })
  );
   
  
 }



 // you can use this but i did not since i had number of markers to dealt with
  /*handleToggleModal=()=> {
    
    this.setState({ showModal: !this.state.showModal })
        
   
    //this.setState({});
  }*/

  _renderCityMarker = (city, index) => {
    return (
      <Marker key={`marker-${index}`}
        longitude={city.location.lng}
        latitude={city.location.lat} >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  }

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
 

  render() {
    
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})
         
          // call `setState` and use the state to update the map.
        }

        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
     
        mapboxApiAccessToken={'pk.eyJ1Ijoia2hvcnJhbSIsImEiOiJjamsyZXQyeWQwcGJwM2ptdDhndnNxZ3dsIn0.cAdkhMm3Xg9_3b2obaokMA'}
      >
      
    
 
{ 
               
            /*  this.state.loaded === true ?
            VenueAPI.locationofPlaces.map((place, ind, arr) => {
               const lat = place.location.lat;
               const long = place.location.lng;
           console.log(lat, long);
              
          
            return (
              <Marker   key={place.id} latitude={lat} longitude={long} offsetLeft={-20} offsetTop={-10}  >
                <div>
                <div refs="marker" className="marker" onClick={() => this.handleToggleModal()}>
                 { this.state.showModal &&
       <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
                    <InfoVenue info={place} />
                  </SimpleModal>

                 }
                </div>
                </div>
                </Marker>
              )
            }) : <div>loading</div>
         
          }*/
         } {VenueAPI.locationofPlaces.map(this._renderCityMarker) }

            {this._renderPopup()}
          
    
    
    
      
        <div style={{ position: 'absolute', right: 0 }}>
          <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
        </div>
       
      </ReactMapGL>
    )
 
}

}
export default Map
```


## Installation

to run the app in you local machine:

1. clone the project
2. put you API key in util/infoAPI.js file where it says put your foursqare API
3. put your Mapbox token in Map.js
4. then run the application in terminal using:

```
cd <project-name>
npm install
npm start

```
also make sure pick your favorite browser.

## API Reference

to API used here 
1. mapbox API
2. foursquare API

## Tests

tests will be dsiplayed errors in your browser make sure you look at ther errors and got to the line number

## how to use

to use this projects or getting some code snippets. you are allowed to do so. provided your own API key and token

## Contribute

if you think you can add additional features and add some functionality then do make pull request or we can discuss the problem your running. so we can overcome it collectively.


## credits

1. udacity to make me a proper front end developer
2. mapbox
3. react component thinking
4. uber documentation






 
