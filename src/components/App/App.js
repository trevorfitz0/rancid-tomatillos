// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import MovieContainer from '../MovieContainer/MovieContainer';
import movieData from '../../data';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      modalView: false,
      modalMovie: {},
      error: ''
    }
  }

  getAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`There has been an error: ${response.status}`);
      })
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(err => this.setState({ error: `Sorry - there has been a problem with the server. Please refresh the page. Code: ${err}` }));
  }

  getSingleMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`There has been an error: ${response.status}`);
      })
      .then(data => this.setState({ modalMovie : data.movie }))
      .catch(err => alert(`Please try again. Code: ${err}`));
  }

  componentDidMount() {
    this.getAllMovies();
  }

  toggleModal = id => {
    if (id) {
      this.getSingleMovie(id);
    } else {
      this.setState({ modalMovie : {}});
    }
    this.setState({ modalView: !this.state.modalView });
  }

  render() {
    return (
      <main>
        <Modal show={this.state.modalView} toggleModal={this.toggleModal} movie={this.state.modalMovie}/>
        <Header/>
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.movies.length ? <MovieContainer movies={this.state.movies} toggleModal={this.toggleModal}/> : <h2>Loading...</h2>}
      </main>
    )
  }
}
