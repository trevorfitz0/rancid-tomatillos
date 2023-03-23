import React from 'react';
import './Modal.css';

function Modal({ show, toggleModal }) {
  if (show) {
      return (
        <section className='modal-section' onClick={({ target }) => target.className === 'modal-section' && toggleModal()}>
          <div className='modal'>
    
          </div>  
        </section>
      );
    }
  return null;
}

export default Modal;