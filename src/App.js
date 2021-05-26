import React from 'react'
import {MovieList} from './features/movies/MoviesList'
import {SearchForm} from './app/SearchForm'
import {Container, Typography} from '@material-ui/core';

export default function App() {
  return (
    <Container>
      <SearchForm />
      <MovieList />
    </Container>    
  )
}
