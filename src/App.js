import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { SongsList } from './features/songs/SongsList';
import { SingleSong } from './features/songs/SingleSong';
import { Nav } from './app/Nav';
import Title from './app/Title';

export default function App() {
	return (
		<Router>
			<Container>
				<Title />
				<Nav />
				<Switch>
					<Route exact path='/song/:songId'>
						<SingleSong />
					</Route>
					<Route exact path='/'>
						<SongsList />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}
