import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantDetail from './Components/RestaurantDetail';
import Header from './Components/Header';
import Cards from './Components/Cards';
import {Switch, Route} from 'react-router-dom';
import { Card, CardDeck, Badge } from 'react-bootstrap';



function App() {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    const URL = "https://mini-yelp-be.herokuapp.com/restaurants";
    fetch(URL)
    .then((res) => 
    res.json())
    .then((res) => 
        setRestaurants(res))
},[]);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/restaurants">
          <Header/>
          <CardDeck className="m-2">
          <Cards restaurantsList={restaurants}/>  
          </CardDeck>
        </Route>
        <Route path="/restaurants/:id">
          <RestaurantDetail />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
