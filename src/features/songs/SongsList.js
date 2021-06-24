import React, { useEffect } from 'react';
import { SongItem } from './SongItem';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs, selectAllSongs } from './songsSlice';

const useStyles = makeStyles({
	root: {},
	loader: {},
});

export function SongsList() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const songs = useSelector(selectAllSongs);
	const songsStatus = useSelector(state => state.songs.status);
	const error = useSelector(state => state.songs.error);
	useEffect(() => {
		if (songsStatus === 'idle') {
			dispatch(fetchSongs());
		}
	}, [songsStatus, dispatch]);

	let content;

	if (songsStatus === 'loading') {
		content = <div className='loader'>Loading...</div>;
	} else if (songsStatus === 'succeeded') {
		content = songs.map(song => {
			return <SongItem song={song} key={song.items[0].id} />;
		});
	} else if (songsStatus === 'failed') {
		content = <div>{error}</div>;
	}

	return (
		<Container className={classes.root}>
			<div>{content}</div>
		</Container>
	);
}
