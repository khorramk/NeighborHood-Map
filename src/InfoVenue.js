import React, {Component} from 'react';
import './App.css';
class InfoVenue extends Component {
         render (){
             const images = this.props.info.categories[0].icon.prefix;
             const format = this.props.info.categories[0].icon.suffix;
             const main = images + format;
           return (
               <div className="box">
                 
                    <div style={{width: 100, height: 200, backgroundImage: `url(${main})`}} />
                     <h1>{this.props.info.name}</h1>
                     <p>{this.props.info.location.address}</p>

               </div>
           )
         }
}

export default InfoVenue