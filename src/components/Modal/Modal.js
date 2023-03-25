import React from 'react';
import './Modal.css';
import Rating from '../Rating/Rating';
import closeIcon from '../../images/close-icon.png'

function Modal({ show, toggleModal, movie }) {
  if (show) {
    const genres = movie.genres.map((genre, i) => {
      return <div key={i} className='genre-box'>{genre}</div>
    });

      return (
        <section className='modal-section' onClick={({ target }) => target.className === 'modal-section' && toggleModal()}>
            <section className='inner-modal'>
                <img alt={movie.title} className='modal-poster' src={movie.backdrop_path}/>
                <div className='title-rating'>
                    <h2>{movie.title}</h2> 
                    <Rating number={Math.floor(movie.average_rating)}/>
                </div>
                    <div className='linebreak'/>
                <div className="movie-info">
                    <i>{movie.overview}</i><br />
                    <p>Runtime: {movie.runtime}</p>
                    {genres}
                    <p>Release Date: {movie.release_date}</p>
                    <p>Tagline: {movie.tagline}</p>
                </div> 
                <img onClick={() => toggleModal()} className='close-button' alt='close modal' src={closeIcon}/>
            </section>
        </section>
      );
    }
  return null;
}

export default Modal;

