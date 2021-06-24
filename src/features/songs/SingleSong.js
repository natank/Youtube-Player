import React from 'react';
import { Typography } from '@material-ui/core';
export function SingleSong({ song }) {
	console.log(`song=${JSON.stringify(song)}`);
	return song ? (
		<div>
			<img src={song} alt='song' />
			<Typography variant='h5'>{song.snippet.title}</Typography>
			<Typography variant='h5'>{`${song.statistics.viewCount} views`}</Typography>
			<Typography variant='h5'>
				{`published: ${song.snippet.publishedAt}`}
			</Typography>
			<Typography variant='h5'>
				{`dislikes: ${song.statistics.dislikeCount}`}
			</Typography>
			<Typography variant='h5'>
				{`likes: ${song.statistics.likeCount}`}
			</Typography>
		</div>
	) : null;
}
