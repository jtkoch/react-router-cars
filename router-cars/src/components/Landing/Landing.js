import React from 'react'
import Card from '../Card/Card.js';

function Landing({cars, setCars}) {

  return (
    <div>
      {cars.map((car) => {
        return <Card car={car} />
      })}
    </div>
  )
}

export default React;