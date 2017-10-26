import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import CurrentDestination from './components/CurrentDestination'

class App extends Component {
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

