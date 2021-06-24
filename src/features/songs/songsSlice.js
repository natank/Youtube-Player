import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as songs from '../../api/songs';

const initialState = {
	songs: [],
	selectedSongId: null,
	status: 'idle',
	error: null,
};

const fetchSongs = createAsyncThunk('songs/fetchSongs', async filter => {
	const response = await songs.getSongs(filter);
	return response;
});

const songsSlice = createSlice({
	name: 'songs',
	initialState,
	reducers: {
		songSelected(state, action) {
			state.selectedSongId = action.payload;
		},
		songDeSelected(state) {
			state.selectedSongId = null;
		},
	},
	extraReducers: {
		[fetchSongs.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchSongs.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.songs = action.payload;
		},
		[fetchSongs.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
	},
});

const { songSelected, songDeSelected } = songsSlice.actions;
export { fetchSongs, songSelected, songDeSelected };

export const selectAllSongs = state => state.songs.songs;

export default songsSlice.reducer;
