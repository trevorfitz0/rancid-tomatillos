
import React from 'react'

function Rating(ratingValue) {
  return (
    <div className='stars'>
    {[...Array(5)].map((star, i) => {
            return (
                <div key={'star-' + i } className="star" style={{color: ratingValue.number > i ? "gold" : "white"}}>&#9733;</div>
            )
    })}
    </div>
  )
}

export default Rating