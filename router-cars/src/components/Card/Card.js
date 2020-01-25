import React from 'react'

function Card({car}) {
    if (!car){
      return (<h1>Loading...</h1>)
    }
  return (
    <div key={car.id}>
      <h1>{car.make}</h1>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.miles}</p>
      <p>{car.price}</p>
      <p>{car.color}</p>
      <p>{car.vin}</p>
    </div>
  )
}

export default Card;