import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../movieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
	const dispatch = useDispatch();
  const movieText = 'Harry';
	
  useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi
				.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
				.catch(err => {
					console.log('Err:', err);
				});
			dispatch(addMovies(response.data));
      console.log(response);
		};
		fetchMovies();
	}, []);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
