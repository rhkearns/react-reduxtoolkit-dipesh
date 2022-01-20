import React, { useEffect } from 'react';
import MovieListing from '../movieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';

const Home = () => {
	useEffect(() => {
		const movieText = 'Harry';
		const fetchMovies = async () => {
			const response = await movieApi.get(
				`?apiKey=${APIKey}&s=${movieText}&type=movie`
			)
      .catch((err) => {
        console.log("Err:", err);
      })
      console.log('API RESPONSE', response);
		};
    fetchMovies()
	}, []);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
