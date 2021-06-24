import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		textAlign: 'center',
		marginBottom: '1rem',
	},
});
export default function Title() {
	const classes = useStyles();
	return (
		<Typography className={classes.root} variant='h1'>
			Songs
		</Typography>
	);
}
