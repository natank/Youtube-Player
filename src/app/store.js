import { configureStore } from '@reduxjs/toolkit';

import songsReducer from '../features/songs/songsSlice';

export default configureStore({
	reducer: {
		songs: songsReducer,
	},
});
