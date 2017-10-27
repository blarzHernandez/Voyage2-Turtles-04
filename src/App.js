import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import CurrentDestination from './components/CurrentDestination'
import Flickr from './Api/FlickrAPI';


class App extends Component {
   
   constructor(){
     super();
     this.state = {
       data:{}
     }
    const fli = new Flickr();
    this.fli = fli;
    
    
   }

 componentDidMount(){
   
   //Use a promise
    this.fli.getAllRecentPhotos()
    .then((data)=>{
      console.log(data);
    })

  
 
 }

  render() {
    return (
      <div className="App">
        <Header />
        <CurrentDestination />
        <Footer />
      </div>
    );
  }
}

export default App;

