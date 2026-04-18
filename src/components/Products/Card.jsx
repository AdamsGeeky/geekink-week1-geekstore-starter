import React from 'react'

function Card({ name, price }) {
  return (
        <div className='card'>
            <img src='/assets/hero.png' alt='Product Image' />
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
        </div>
  )
}

export default Card