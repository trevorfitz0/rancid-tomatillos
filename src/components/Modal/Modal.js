import React from 'react';
import './Modal.css';
import Rating from '../Rating/rating';

function Modal({ show, toggleModal, movie }) {
  if (show) {
      return (
        <section className='modal-section' onClick={({ target }) => target.className === 'modal-section' && toggleModal()}>
            <section className='inner-modal'>
                <img alt={movie.title} className='modal-poster' src={movie.backdrop_path}/>
                <div className='title-rating'>
                    <h2>{movie.title}</h2> 
                    <Rating number={Math.floor(movie.average_rating)}/>
                </div>
                <div className="movie-info">
                    <div className='linebreak'/>
                    <p>{movie.release_date}</p>
                </div> 
            </section>
        </section>
      );
    }
  return null;
}

export default Modal;

