
import React from 'react'
import MovieTile from '../MovieTile/MovieTile'

function MovieContainer(props) {

    const allMovies = props.movies.map((movie) => <MovieTile movieData={movie}/>)

  return (
    <section className='movie-containers'>
        {allMovies}
    </section>
  )
}

export default MovieContainer