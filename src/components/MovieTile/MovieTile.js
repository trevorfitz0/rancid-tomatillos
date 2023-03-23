
import React from 'react'
import './MovieTile.css'

function MovieTile({movieData, toggleModal}) {
    
  return (
    <img key={movieData.id} className="poster" alt={`${movieData.title}-poster`} src={movieData.poster_path} onClick={() => toggleModal(movieData.id)}/>
  )
}

export default MovieTile