
import React from 'react';
import './MovieTile.css';
import PropTypes from 'prop-types';
import noPosterImage from '../../images/no-poster.png';

function MovieTile({id, title, poster_path, toggleModal}) {
  return (
    <img 
      key={id}
      className="poster"
      alt={`${title} poster`}
      src={poster_path}
      onClick={() => toggleModal(id)}
    />
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