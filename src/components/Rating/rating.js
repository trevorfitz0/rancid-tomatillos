
import React from 'react'

function Rating(ratingValue) {
    console.log(ratingValue)
  return (
    <div className='stars'>
    {[...Array(5)].map((star, i) => {
            return (
                <div className="star" style={{color: ratingValue.number > i ? "gold" : "white"}}>&#9733;</div>
            )
    })}
    </div>
  )
}

export default Rating