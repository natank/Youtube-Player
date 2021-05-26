import React from 'react'
import {Button,Container, Typography, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux'

import {counterIncremented, counterDecremented} from './countersSlice'

const useStyles=makeStyles({
  root:{
    maxWidth: '20rem',
    background: "green",
    padding: "2rem",
    border:'2px solid black',
    boxSizing: "border-box"
  },
  btn: {
    width: '3rem',
    background: "blue",
    color: "white"
  },
  statusBox: {
    textAlign: 'center'
  },
  actions: {
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: '1rem',
    justifyContent: "center"
  }
})

export function SingleCounter({id}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counters.find(item => item.id === id))

  const onIncrement = e => {
    dispatch(counterIncremented({id}))
  }
  const onDecrement = e => {
    dispatch(counterDecremented({id}))
  }
  return (
    <Card className={classes.root}>
      <Typography variant="h2" className={classes.statusBox}>{counter.value}</Typography>
      <Container className={classes.actions}>
        <Button className={classes.btn} onClick = {onIncrement}><Typography>+</Typography></Button>
        <Button className={classes.btn} onClick = {onDecrement}><Typography>-</Typography></Button>
      </Container>
    </Card>
  )
}
