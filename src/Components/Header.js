import React from 'react';
import { Jumbotron , Container, Form, Col, Button} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';


function Header() {
    return (
    <Jumbotron fluid>
    <Container>
      <h1>MINI-YELP</h1>
      <Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Find" />
    </Col>
    <Col>
      <Form.Control placeholder="Location" />
    </Col>
    <Col>
    <Button variant="danger" type="submit">
    <Search />
  </Button>
    </Col>
  </Form.Row>
</Form>
    </Container>
    </Jumbotron>
    );
}
export default Header; 