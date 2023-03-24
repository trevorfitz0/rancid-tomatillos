import React from 'react';
import './Modal.css';

function Modal({ show, toggleModal, movie }) {
  if (show) {
      return (
        <section className='modal-section' onClick={({ target }) => target.className === 'modal-section' && toggleModal()}>
          <div className='modal' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.average_rating}</p>
              <p>{movie.release_date}</p>
            </div>
          </div> 
        </section>
      );
    }
  return null;
}

export default Modal;