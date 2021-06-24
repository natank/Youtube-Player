import { songs } from './songsData';
import axios from 'axios';
const KEY = 'AIzaSyCPFR-b3vldvPYvj2qZdcM_W44PkHZ8dcc';

const youtube = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});

export const getSongs = async (filter = 'Suzzi Quatro') => {
	let response = await youtube.get('/search', {
		params: {
			q: filter,
		},
	});
	response = response.data.items.filter(item => item.id.videoId);
	response = response.map(item => {
		return new Promise((resolve, reject) => {
			youtube
				.get('/videos', {
					params: {
						id: item.id.videoId,
						part: 'snippet, statistics',
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	});
	const data = await Promise.all(response);

	localStorage.setItem('songs', JSON.stringify(data));
	return data;
};

// API KEY
//AIzaSyCPFR-b3vldvPYvj2qZdcM_W44PkHZ8dcc
