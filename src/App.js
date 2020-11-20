import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantDetail from './Components/RestaurantDetail';
import Header from './Components/Header';
import Cards from './Components/Cards';
import React from 'react-dom';

function App() {
  /*useEffect(() => {
    const URL = "./fakeData.js";
    fetch(URL)
    .then((res) => {
        res.json();
    })
    .then((res) => {
        console.log(res);
    })
},[]);*/
  return (
    <div>
        <RestaurantDetail />
        <Header/>
        <Cards />
    </div>
  );
}
export default App;
