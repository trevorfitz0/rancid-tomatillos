import React, { Component } from 'react';
import './Modal.css';
import Rating from '../Rating/Rating';
import closeIcon from '../../images/close-icon.png';
import PropTypes from 'prop-types';
import theaterImage from '../../images/theater.jpg';
import { Link } from 'react-router-dom';
import { getSingleMovie } from '../../api-calls';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      backdrop_path: "",
      average_rating: "",
      overview: "",
      runtime: "",
      release_date: ""
    }
  }

  componentDidMount() {
    getSingleMovie(this.props.id)
      .then(data => this.setState({...data.movie}));
  }

  render() {
    const {title, backdrop_path, average_rating, overview, runtime, release_date} = this.state;

    return (
      <section data-cy='modal-section' className='modal-section'>
          <section className='inner-modal'>
              <img data-cy='backdrop_path' alt={title} className='modal-poster' src={backdrop_path}/>
              <div className='title-rating'>
                  <h2>{title}</h2> 
                  <Rating number={Math.floor(average_rating)}/>
              </div>
                  <div className='linebreak'/>
              <div className="movie-info">
                  <i>{overview}</i><br />
                  <ul>
                      <li>{release_date.split("-")[0]}</li>
                      <li> {runtime} minutes</li>
                  </ul>
              </div>
              <Link to={`/`} className='close-button'>
                <img className='close-button' alt='close modal' src={closeIcon} data-cy='close-button'/>
              </Link>
          </section>
      </section>
    );
  }
}

export default Modal;

Modal.propTypes = {
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