
import React from 'react'
import MovieTile from '../MovieTile/MovieTile'
import './MovieContainer.css'

function MovieContainer(props) {

    const allMovies = props.movies.map((movie) => <MovieTile movieData={movie}/>)

  return (
    <section className='movie-container'>
        {allMovies}
    </section>
  )
}

export default MovieContainer