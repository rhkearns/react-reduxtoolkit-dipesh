import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MovieDetail from './components/movieDetails/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'
import './App.scss';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/movie/:imdbID" element={<MovieDetail />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
