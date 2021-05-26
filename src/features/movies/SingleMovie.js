import React from 'react'
import {Button,Container, Typography, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux'

import {movieIncremented, movieDecremented} from './moviesSlice'

const useStyles=makeStyles({
  root:{
    padding: "2rem",
    border:'2px solid black',
    boxSizing: "border-box",
    marginBottom: "1rem",
    display: 'flex'
  },
  movie:{
    flexGrow: '1'
  },
  description: {
    flexGrow: '2'
  }
})

export function SingleMovie({movie}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  
  return (
    <Container className={classes.root}>
      <Card className={classes.movie}>
      <iframe width="420" height="315" src='https://www.youtube.com/watch?v=f3XlIQ5pmdQ'></iframe>
      </Card>
      <Card className = {classes.description}>
        <Typography variant="h5">{movie.name}</Typography>
        <Typography variant="body1">views: {Math.floor(movie.views/1000000)}M views </Typography>
      </Card>
    </Container>
  )
}
