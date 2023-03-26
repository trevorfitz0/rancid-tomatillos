
import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './MovieContainer.css';

function MovieContainer(props) {

    const allMovies = props.movies.map(movie => { 
      return <MovieTile 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.posterpath}
        toggleModal={props.toggleModal}
      />
    });

  return (
    <section className='movie-container'>
        {allMovies}
    </section>
  );
}

export default MovieContainer;