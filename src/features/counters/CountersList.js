import React from 'react'
import {SingleCounter} from './SingleCounter'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux'

const useStyles = makeStyles({
  root:{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 300px)',
    justifyItems: "center",
    gap: '1rem',
    backgroundColor: "gray"
  }
})
export function CounterList() {
  const counters = useSelector(state => state.counters)
  const renderedCounters = counters.map(counter=>{
    return <SingleCounter id={counter.id} key={counter.id}/>
  })
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h3">Counters</Typography>
      {renderedCounters}
    </Container>
  )
}
