import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { SongsList } from './features/songs/SongsList';
import { SingleSong } from './features/songs/SingleSong';
import { Nav } from './app/Nav';
import Title from './app/Title';
import * as songsApi from './api/songs';

export default function App() {
	const [songs, setSongs] = useState([]);
	const [selectedSong, setSelectedSong] = useState();
	const [filter, setFilter] = useState();
	const [songsStatus, setSongsStatus] = useState('idle');
	const [error, setError] = useState(null);

	const songSelected = songId => {
		let song = songs.find(song => song.id === songId);

		setSelectedSong(song);
	};

	async function fetchSongs() {
		setSongsStatus('loading');
		try {
			const response = await songsApi.getSongs(filter);
			setSongsStatus('succeeded');
			setSongs(response);
			setError(null);
		} catch (error) {
			setSongsStatus('error');
			setError('Something happend');
		}
	}
	useEffect(() => {
		fetchSongs();
	}, []);

	useEffect(() => {
		fetchSongs();
	}, [filter]);
	return (
		<Router>
			<Container>
				<Title />
				<Nav filter={filter} setFilter={setFilter} />
				<Switch>
					<Route exact path={`/song`}>
						<SingleSong song={selectedSong} />
					</Route>
					<Route exact path='/'>
						<SongsList
							songs={songs}
							songsStatus={songsStatus}
							setSongsStatus={setSongsStatus}
							selectedSong={selectedSong}
							setSelectedSong={setSelectedSong}
							error={error}
							songSelected={songSelected}
						/>
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}
