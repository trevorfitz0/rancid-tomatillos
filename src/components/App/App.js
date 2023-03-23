// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import MovieContainer from '../MoviesContainer/MovieContainer';
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
 
  render() {
    return (
      <main>
        <Header/>
        {this.state.movies.length ? <MovieContainer movies={this.state.movies}/> : <h2>Loading...</h2>}
      </main>
    )
  }
}
