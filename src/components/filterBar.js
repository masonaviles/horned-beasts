import React from 'react';
import { Navbar, Form, Button, InputGroup, FormControl, Row, Container, Col } from 'react-bootstrap'

class FilterBar extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Navbar className="justify-content-center" bg="dark" variant="dark">
              <Form inline>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mr-3" style={{ color: 'white' }}>Number of Horns</Form.Label>
                  <Form.Control as="select" className="mr-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>100</option>
                  </Form.Control>
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Navbar>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default FilterBar;
