import React, { Component } from 'react';

class CurrentDestination extends Component {
    render() {
      return (
        <div className="currentDestination">
            <h1>City, State</h1>
            <div>
              <label for="location">
                <span>From </span> 
                <input  type="text" size="16" placeholder="Local Airport" />
              </label>
            </div>
            <button>Flights from<span> &#36;000</span></button>
        </div>
      );
    }
  }
  
  export default CurrentDestination;