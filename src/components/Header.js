import React, { Component } from 'react';
import {Nav, NavDropdown,Form, FormControl,FormGroup, Navbar,Button, ButtonGroup, NavbarHeader, NavbarInstance, MenuItem, NavItem }from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <div className="center-search">
            <Navbar.Form >            
              <FormGroup >                
                  <FormControl type="text" placeholder="Search" />
              </FormGroup>
              <Nav pullRight>
              <NavItem eventKey={2} href="#">New Destination</NavItem>
              </Nav>
            </Navbar.Form>
            </div>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;