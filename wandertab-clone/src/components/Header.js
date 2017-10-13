import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="flex justify-between items-center">
        <a className="githubLink" href="">GiHub Link</a>
        <label htmlFor="selectDesination">Type in new destination
          <input type="text" id="selectDesination"/>
        </label>
        <div>
          <h2>New Desintation></h2>
        </div>
      </header>
    );
  }
}

export default Header;