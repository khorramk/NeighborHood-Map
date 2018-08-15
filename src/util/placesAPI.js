import * as info from './infoMapAPI';
import * as ven from './getPlace';
//make a app to pinpoint places to go to in makkah
//this places array gets the all the id for markers

//getting the location of markers and names
export const locationOfMarkers = ()=>{
    //const newObj = info.locationofPlaces;
     
    
    return info.locationofPlaces;
}
export const cvenue = ()=>{
info.chosenVenue.forEach(element => {
    ven.cplaces.push(element.name);

});

}

