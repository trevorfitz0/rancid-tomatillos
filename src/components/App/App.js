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
      modalMovie: {}
    }
  }

  componentDidMount() {
    this.setState({
      movies: movieData.movies
    })
  }

  toggleModal = id => {
    if (id) {
      const modalMovie = this.state.movies.find(movie => movie.id === id);
      this.setState({ modalMovie: modalMovie })
    }

    this.setState({ modalView: !this.state.modalView });
  }
 
  render() {
    return (
      <main>
        <Modal show={this.state.modalView} toggleModal={this.toggleModal} movie={this.state.modalMovie}/>
        <Header/>
        {this.state.movies.length ? <MovieContainer movies={this.state.movies} toggleModal={this.toggleModal}/> : <h2>Loading...</h2>}
      </main>
    )
  }
}
