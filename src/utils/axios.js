import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://amiiboapi.com/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;