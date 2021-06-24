import React from 'react';
import { SongItem } from './SongItem';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
	root: {},
	loader: {},
});

export function SongsList({
	songs,
	songsStatus,
	songSelected,
	setSongsStatus,
	selectedSong,
	setSelectedSong,
	error,
}) {
	const classes = useStyles();

	let content;

	if (songsStatus === 'loading') {
		content = <div className='loader'>Loading...</div>;
	} else if (songsStatus === 'succeeded') {
		content = songs.map(song => {
			return <SongItem song={song} key={song.id} songSelected={songSelected} />;
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
