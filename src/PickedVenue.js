import React, {Component} from 'react';
import './App.css';
import 'bootstrap';
import 'react-bootstrap';

class PickedVenue extends Component{
   

  render(){
    
    
       return (
           <div>
               <select aria-label="choosevenue"  className="full-width"
                   
                   onChange={(e)=> {
                       let elem = null;
                   elem = this.props.venue.filter(element => 
                        e.target.value === element.name 
                      
                          
                    )
                this.props.choosingvenue(e.target.value, elem[0])
                }
                    }
               >
                  {
                      this.props.venue.map((place)=>{
                          

                      return(
                          <option  ven={place} key={place.id} value={place.name}>{place.name}</option>)
                    })
                  }
               
                       
               </select>
           </div>
       )
   
}
}
export default PickedVenue