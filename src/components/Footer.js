import React, { Component } from 'react';
import CurrentDestination from './CurrentDestination'

class Footer extends Component {
  render() {
    return (
          <div id="footer" className="flex flex-wrap justify-between items-center ttu fw4 f6 tracked-mega mt3">
            <small><a href="#">Flickr Author</a></small>
            <ul className="list pa0 ma0">
              <small>Share:</small>
              <li><a className="iconLink" href="#">Facebook Icon</a></li>
              <li><a className="iconLink" href="#">Twitter Icon</a></li>
              <li id="CopyToClipboard">Cliboard Icon</li>
            </ul>
          </div>
    );
  }
}

export default Footer;