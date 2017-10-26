import React, { Component } from 'react';
import {Nav, NavDropdown, Glyphicon, Form, FormControl,FormGroup, Navbar,Button, ButtonGroup, NavbarHeader, NavbarInstance, MenuItem, NavItem }from 'react-bootstrap';

class Header extends Component {
  render() {
    return (

      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
             
              <a href="in#">Github</a>
             
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form >            
              <FormGroup  >                
                  <FormControl  type="text"  placeholder="Search New Destination" />
              </FormGroup>
              
              <Nav pullRight>
                <NavItem eventKey={2} href="#"><h3>New Destination <Glyphicon glyph="chevron-right"/></h3></NavItem>
              </Nav>
           
            </Navbar.Form>
            </Navbar.Collapse>
    
      </Navbar>
    
    );
  }
}

export default Header;