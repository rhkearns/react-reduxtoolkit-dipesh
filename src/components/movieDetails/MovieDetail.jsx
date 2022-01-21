import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow} from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
  }, [dispatch, imdbID])

  return (
    <div>
      Movie Details
    </div>
  );
};

export default MovieDetail;