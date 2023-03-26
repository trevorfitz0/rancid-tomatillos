
import React from 'react';
import './MovieTile.css';
import PropTypes from 'prop-types';
import noPosterImage from '../../images/no-poster.png';

function MovieTile({id, title, poster_path, toggleModal, average_rating}) {
  return (
    <section className='tile-section'>
      <img 
      key={id}
      className="poster"
      alt={`${title} poster`}
      src={poster_path}
      onClick={() => toggleModal(id)}
      />
      <div className='rating-info'>
        <p className='rating-number'>{average_rating}</p>
        <p className='star'>&#9733;</p>
      </div>
    </section>
  );
}

export default MovieTile;

MovieTile.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  toggleModal: PropTypes.func
};

MovieTile.defaultProps = {
  poster_path: noPosterImage
}