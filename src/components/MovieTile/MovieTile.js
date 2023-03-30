
import React from 'react';
import './MovieTile.css';
import PropTypes from 'prop-types';
import noPosterImage from '../../images/no-poster.png';
import { Link } from 'react-router-dom';

function MovieTile({id, title, poster_path, average_rating}) {
  return (
    <Link to={`/${id}`}>
      <section className='tile-section'>
        <img 
          key={id}
          className="poster"
          alt={`${title} poster`}
          src={poster_path}
          data-cy="poster-image"
        />
        <div className='rating-info'>
          <p className='rating-number'>{average_rating}</p>
          <p className='star'>&#9733;</p>
        </div>
      </section>
    </Link>
  );
}

export default MovieTile;

MovieTile.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};

MovieTile.defaultProps = {
  poster_path: noPosterImage
}