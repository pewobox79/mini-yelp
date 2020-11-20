import React from 'react';
import { Jumbotron , Container, Badge, Button, Media} from 'react-bootstrap';



function RestaurantDetail() {
    return (
    <Jumbotron fluid>
    <Container>
      <h1>Restaurants Name</h1>
      <p>
          CITY
      </p>
      <Badge variant="secondary">
          Something
      </Badge>
    </Container>
    <ul className="list-unstyled">
  <Media className="m-5" as="li">
    <Media.Body>
      <h5>DATE</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

 
</ul>
    </Jumbotron>
    );
}
export default RestaurantDetail; 