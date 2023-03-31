import './App.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import MovieContainer from '../MovieContainer/MovieContainer';
import Form from '../Form/Form'; 
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getAllMovies } from '../../api-calls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: ''
    }
  }

  searchMovies = value => {
    console.log(value)
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.includes(value);
    });
    this.setState({ filteredMovies: filteredMovies});
  }

  componentDidMount() {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data.movies });
      })
      .catch(err => this.setState({ error: `${err}` }));
  }

  resetFilter = () => {
    this.setState({ filteredMovies: this.state.movies });
  }

  render() {
    return (
      <main>
        <Header/>
        <Route path="/:id" render={({ match }) => {
          const { id } = match.params;
          return <Modal id={id} resetFilter={this.resetFilter}/>
        }}/>
        {this.state.error && <h2 className='error'>{this.state.error}</h2>}
        <Route exact path="/" render={() => this.state.movies.length 
          ? <>
              <Form search={this.searchMovies}/>
              <MovieContainer movies={ this.state.filteredMovies.length ? this.state.filteredMovies : this.state.movies } />
            </>
          : <h2>Loading...</h2>
        }/>
      </main>
    )
  }
}
