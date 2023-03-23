
import React from 'react'
import './MovieTile.css'

function MovieTile({movieData}) {
    
  return (
    <img key={movieData.id} className="poster" alt={`${movieData.title}-poster`} src={movieData.poster_path}/>
  )
}

export default MovieTile