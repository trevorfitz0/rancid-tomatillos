// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import MovieContainer from '../MovieContainer/MovieContainer';
import movieData from '../../data';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getAllMovies } from '../../api-calls';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data.movies });
      })
      .catch(err => this.setState({ error: `${err}` }));
  }

  render() {
    return (
      <main>
        <Header/>
        <Route path="/:id" render={({ match }) => {
          const { id } = match.params;
              return <Modal id={id}/>
        }}/>
        {this.state.error && <h2 className='error'>{this.state.error}</h2>}
        <Route exact path="/" render={() => this.state.movies.length 
          ? <MovieContainer 
            movies={this.state.movies} 
            toggleModal={this.toggleModal}
            /> 
          : <h2>Loading...</h2>
        }/>
      </main>
    )
  }
}
