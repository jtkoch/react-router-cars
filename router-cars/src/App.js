import React, {useState, useEffect} from 'react';
import {data} from './data.js';
import './App.scss';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Form from './components/Form/Form.js';
import Card from './components/Card/Card.js';

function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    setCars(cars)
  }, [])

  return (
    <div className="App">
      <Route exact path="/" >
        <Landing cars={cars} setCars={setCars} />
      </Route>

      <Route path="/add">
        <Form setCars={setCars} />
      </Route>

      <Route path="/cars/:id">
        <Card setCars={setCars} />
      </Route>
    </div>
  );
}

export default App;