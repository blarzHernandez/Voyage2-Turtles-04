/**
 * Flickr API client
 */
const FLICKR_API_KEY = '50c9076e723978a49336f15976c0fcf4';

const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&
                            api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=true`;

 export default class Flickr {



  //get all recente photo by some tags
  getAllRecentPhotos(){    
    //Use a promise
    return new Promise((resolve, reject) =>{
      fetch(FLICKR_API_ENDPOINT)
      .then(res => res.json())
      .then(data=>resolve(data))
      .catch(error => reject(error))
    })
       
        
  }

  //get photo by tag
  getPhotoByTagText(){

  }


  //Select one photo randomly
  getRandomPhoto(){

  }



}






