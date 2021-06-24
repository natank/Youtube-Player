import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { songSelected } from './songsSlice';
import { Button, Container, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { parseISO, formatDistanceToNow } from 'date-fns';

const useStyles = makeStyles({
	root: {
		padding: '2rem',
		border: '2px solid black',
		boxSizing: 'border-box',
		marginBottom: '1rem',
		display: 'grid',
		gap: '1rem',
		cursor: 'pointer',
		gridTemplateColumns: '1fr 3fr',
		'& p': {
			marginBottom: '.5rem',
		},
	},
	song: {
		overflow: 'hidden',
		paddingBottom: '56.25%',
		position: 'relative',
		height: '0',
		'& img': {
			left: 0,
			top: 0,
			height: '100%',
			width: '100%',
			position: 'absolute',
		},
	},
	description: {
		padding: '1rem',
		paddingTop: '0',
	},
});

export function SongItem({ song, songSelected }) {
	const classes = useStyles();
	const { snippet, statistics } = song;
	const timeAgoString = timeAgo(snippet.publishedAt);
	const history = useHistory();
	const songClicked = () => {
		songSelected(song.id);
		history.push('/song');
	};
	return (
		<Container className={classes.root} onClick={songClicked}>
			<Card className={classes.song} scrolling='no'>
				<img src={snippet.thumbnails.medium.url} alt='song thumbnail' />
			</Card>
			<Card className={classes.description}>
				<Typography variant='h5'>{snippet.title}</Typography>
				<Typography variant='body1'>
					{snippet.channelTitle} | views:{' '}
					{Math.floor(statistics.viewCount / 1000000)}M views | {timeAgoString}
				</Typography>
				<Typography variant='body1'>{snippet.description}</Typography>
			</Card>
		</Container>
	);
}

function timeAgo(timestamp) {
	let timeAgo = '';
	if (timestamp) {
		const date = parseISO(timestamp);
		const timePeriod = formatDistanceToNow(date);
		timeAgo = `${timePeriod} ago`;
	}
	return timeAgo;
}
