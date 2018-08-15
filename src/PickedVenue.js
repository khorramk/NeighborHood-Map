import React, {Component} from 'react';


class PickedVenue extends Component{
   

  render(){
    
    
       return (
           <div>
               <select
                   
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