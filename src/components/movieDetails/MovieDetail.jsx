import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {
	fetchAsyncMovieOrShowDetail,
	getSelectedMovieOrShow,
} from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import './MovieDetail.scss'

const MovieDetail = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	const data = useSelector(getSelectedMovieOrShow);
	console.log(data);

	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(imdbID));
	}, [dispatch, imdbID]);

	return (
		<div className="movie-section">
			<div className="section-left">
				<div className="movie-title">{data.title}</div>
				<div className="movie-rating">
					<span>
						IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
					</span>
					<span>
						IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
					</span>
					<span>
						Runtime <i className="fa fa-film"></i> : {data.Runtime}
					</span>
					<span>
						Year <i className="fa fa-calendar"></i> : {data.Year}
					</span>
				</div>
				<div className="movie-plot">{data.Plot}</div>
				<div className="movie-info">
					<div>
						<span>Director</span>
						<span>{data.Director}</span>
					</div>
					<div>
						<span>Stars</span>
						<span>{data.Actors}</span>
					</div>
					<div>
						<span>Genres</span>
						<span>{data.Genre}</span>
					</div>
					<div>
						<span>Languages</span>
						<span>{data.Languages}</span>
					</div>
					<div>
						<span>Awards</span>
						<span>{data.Awards}</span>
					</div>
				</div>
			</div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
		</div>
	);
};

export default MovieDetail;
