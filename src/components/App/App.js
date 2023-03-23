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
      modalView: false
    }
  }

  componentDidMount() {
    this.setState({
      movies: movieData.movies
    })
  }

  toggleModal = id => {
    this.setState({ modalView: !this.state.modalView });
  }
 
  render() {
    return (
      <main>
        <Modal show={this.state.modalView} toggleModal={this.toggleModal}/>
        <Header/>
        {this.state.movies.length ? <MovieContainer movies={this.state.movies} toggleModal={this.toggleModal}/> : <h2>Loading...</h2>}
      </main>
    )
  }
}
