import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async () => {
		try {
			const movieText = 'Harry';
			const response = await movieApi.get(
				`?apiKey=${APIKey}&s=${movieText}&type=movie`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const fetchAsyncShows = createAsyncThunk(
	'movies/fetchAsyncShows',
	async () => {
		try {
			const seriesText = 'Friends';
			const response = await movieApi.get(
				`?apiKey=${APIKey}&s=${seriesText}&type=series`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

const initialState = {
	movies: {},
	shows: {}
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('pending');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('fetched sucessfully');
			return {...state, movies: payload}
		},
		[fetchAsyncMovies.rejected] : () => {
			console.log('rejected');
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log('fetched sucessfully');
			return {...state, shows: payload}
		},
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = state => state.movies.movies;
export const getAllShows = state => state.movies.shows;
export default movieSlice.reducer;
