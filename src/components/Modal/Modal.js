import React, { Component } from 'react';
import './Modal.css';
import Rating from '../Rating/Rating';
import closeIcon from '../../images/close-icon.png';
import PropTypes from 'prop-types';
import theaterImage from '../../images/theater.jpg';
import youtubeLogo from '../../images/youtube-logo.png';
import { Link } from 'react-router-dom';
import { getSingleMovie } from '../../api-calls';

class Modal extends Component {
  constructor(id) {
    super();
    this.state = {
      title: "",
      backdrop_path: theaterImage,
      average_rating: "",
      overview: "",
      runtime: "",
      release_date: "",
      videoSrc: "",
      isLoading: true,
      id: id
    }
  }

  componentDidMount() {
    getSingleMovie(this.props.id)
      .then(data => this.setState({...data.movie, isLoading: false}));
  }

  getVideos(id) {
    getSingleMovie(id + '/videos')
      .then(data => {
        const trailer = data.videos.find(movie => movie.type === 'Trailer') || data.videos[0];
        this.setState({
          videoSrc: "https://www.youtube.com/embed/" + trailer.key
        });
      });
  }

  render() {
    const {title, backdrop_path, average_rating, overview, runtime, release_date, id} = this.state;
    return (
      !this.state.isLoading
        ? <section data-cy='modal-section' className='modal-section'>
            <section className='inner-modal'>
                <img 
                  data-cy='backdrop_path' 
                  alt={title} 
                  className='modal-poster' 
                  src={backdrop_path}
                />
                <iframe 
                  title='Youtube Video'
                  className='youtube-video' 
                  src={this.state.videoSrc}
                  data-cy='video'>
                </iframe>
                <div className='title-rating'>
                    <h2>{title}</h2> 
                    <section className='trailer-section'>
                    <img 
                      className='video' 
                      onClick={() => {
                        this.getVideos(id)
                      }} 
                      alt="youtube logo" 
                      src={youtubeLogo} 
                      data-cy='video-button'>
                    </img>
                    </section>
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
                  <img onClick={this.props.resetFilter} className='close-button' alt='close modal' src={closeIcon} data-cy='close-button'/>
                </Link>
            </section>
        </section>
        : <h2>Loading...</h2>
    );
  }
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  average_rating: PropTypes.number,
  backdrop_path: PropTypes.string,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  release_date: PropTypes.string,
  genres: PropTypes.array,
};

Modal.defaultProps = {
  backdrop_path: theaterImage
};