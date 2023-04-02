import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './MovieContainer.css';

function MovieContainer(props) {
    const allMovies = props.movies.map(movie => { 
      return <MovieTile 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        average_rating={movie.average_rating}
      />
    });

  return (
    <section className='movie-container' data-cy='movie-container'>
      {props.movies.length 
        ? allMovies
        : <h2 className='error'>Nothing matches that search! Please try something else.</h2>}
    </section>
  );
}

export default MovieContainer;