import React, { Component } from 'react';
import {Glyphicon, Form, FormControl,FormGroup,Grid,Col,Row,ControlLabel, Button, ButtonGroup  }from 'react-bootstrap';

class CurrentDestination extends Component {
    render() {
     /* return (
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
      );*/
      return (
        <Grid className="custom-grid">
          <Row className="show-grid">
            <Col sm={6} md={4}>
            <div className="customH1">City, State</div>

              <Form horizontal>

                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                  From
                  </Col>
                  <Col sm={10} >
               
                    <FormControl
                      type="text"
                      placeholder="Local Airport"
                      bsSize="lg"
                    />
                  </Col>
                </FormGroup>

                <FormGroup className="buttons">
                  <Col sm={6} md={2} >
                    <Button type="submit">Flights From <strong>$56565656</strong></Button>
                  </Col>
                </FormGroup>
              </Form>
              
            </Col>
          </Row>
       
        </Grid>
      );
    }
  }
  
  export default CurrentDestination;