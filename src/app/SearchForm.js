import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import SearchBar from 'material-ui-search-bar';
import { fetchSongs } from '../features/songs';
const useStyles = makeStyles(theme => ({
	root: {
		width: '50%',
		margin: 'auto',
		marginBottom: '1rem',
	},
}));

export const SearchForm = () => {
	const classes = useStyles();
	const [filter, setFilter] = useState('');
	const dispatch = useDispatch();

	return (
		<SearchBar
			className={classes.root}
			onChange={e => {
				setFilter(e);
			}}
			value={filter}
			onRequestSearch={() => {
				dispatch(fetchSongs(filter));
			}}
			placeholder='Type something ...'
			autoFocus
		/>
	);
};
