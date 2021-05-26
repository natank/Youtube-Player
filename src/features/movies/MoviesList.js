import React from 'react'
import {SingleMovie} from './SingleMovie'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux'

const useStyles = makeStyles({
  root:{


  }
})


export function MovieList() {
  const movies = useSelector(state => state.movies)
  const renderedMovies = movies.map(movie=>{
    return <SingleMovie movie={movie} key={movie.link}/>
  })
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h3" component="h3">Movies</Typography>
      {renderedMovies}
    </Container>
  )
}
