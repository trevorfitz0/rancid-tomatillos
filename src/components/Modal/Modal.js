import React from 'react';
import './Modal.css';
import Rating from '../Rating/Rating';
import closeIcon from '../../images/close-icon.png';
import PropTypes from 'prop-types';
import theaterImage from '../../images/theater.jpg';

function Modal({toggleModal, title, backdrop_path, average_rating, overview, runtime, release_date, genres}) {
  const movieGenres = genres.map((genre, i) => {
    return <div key={i} className='genre-box'>{genre}</div>
  });
  return (
    <section className='modal-section' onClick={({ target }) => target.className === 'modal-section' && toggleModal()}>
        <section className='inner-modal'>
            <img alt={title} className='modal-poster' src={backdrop_path}/>
            <div className='title-rating'>
                <h2>{title}</h2> 
                <Rating number={Math.floor(average_rating)}/>
            </div>
                <div className='linebreak'/>
            <div className="movie-info">
                <i>{overview}</i><br />
                <p>Runtime: {runtime}</p>
                {movieGenres}
                <p>Release Date: {release_date}</p>
            </div> 
            <img onClick={() => toggleModal()} className='close-button' alt='close modal' src={closeIcon}/>
        </section>
    </section>
  );
}

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  release_date: PropTypes.string,
  genres: PropTypes.array
};

Modal.defaultProps = {
  backdrop_path: theaterImage
};