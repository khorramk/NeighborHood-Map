import React, {Component} from 'react';
import Map from './Map.js';
import './App.css';

class App extends Component{
       render(){
           return(
               <div>
                   <div className="map-content">
                   <Map />
                   </div>
               </div>
           )
       }
}

export default App