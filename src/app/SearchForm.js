import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const  SearchForm = ()=> {
  const classes = useStyles();
  return <div>
    
    <TextField
      id="standard-helperText"
      label="Type movie name"
      helperText="movie"
    />
  </div>
}

