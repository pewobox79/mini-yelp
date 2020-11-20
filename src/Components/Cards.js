import React from 'react'; 
import { Card, CardDeck, Badge } from 'react-bootstrap';


const Cards = (props) => {
  return (
    <>
      {props.restaurantsList.map(e => {return (
       <div> 
        <Card>
          <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>City ID
            {e.city_id}
          </Card.Text>
          </Card.Body>
          <Badge className="m-2" variant="secondary">Somethning missing</Badge>
          </Card>
         </div>      
          
      )})}
    </>
  )
}

export default Cards;