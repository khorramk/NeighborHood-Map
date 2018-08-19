import * as places from './getPlace';
import * as venu from './placesAPI';

//please put your own client_id if your running from your own local machine
//also client secret
const client_id = '';
const client_secret = '';
//chossing london by defualt
const lat = 51.5074;
const long = 0.1278;
//choesn venue array goes here
export let chosenVenue = [];
//first api for getting art and intertainment
const api = `https://api.foursquare.com/v2/venues/categories?client_id=${client_id}&client_secret=${client_secret}&v=20180323&limit=1&ll=${lat},${long}`
//second api for getting venueapi
export let locationofPlaces = [];     
//this fucntion will fetch the categories
export const getVenue = () => 

   fetch(api)
   .then(response => response.json())
   .catch(console.log('failed to fetch'))
   .then(data => getJson(data))
   .catch(console.log('not retrieved'))
   
//this function is for putting the categories in an array
 const getJson = (data) => {
       const categories = [...data.response.categories]
      //chosenVenue.push(categories[0].categories[0].id);
      console.log(categories)
      chosenVenue = categories["0"].categories.slice(1, 10);
      
      console.log(chosenVenue)
  
    venu.cvenue()
    artVenue()

    }

//this funciton fetch the art venue information
  export const artVenue = () => {

    
     places.cplaces.map(place => 
      fetch(`https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&v=20180323&limit=1&ll=${lat},${long}&query=${place}`)
        .then(data => data.json())
        .catch(() => 'not fetched')
        .then(resp => getrsp(resp))
        .catch("conversion failed")
  
  )
}  
   const getrsp=(respond)=>{
     console.log(respond.response.venues["0"])
     locationofPlaces.push(respond.response.venues["0"])
     artgallery();
   }

  export const artgallery = ()=>{
      console.log(locationofPlaces.length);
  }