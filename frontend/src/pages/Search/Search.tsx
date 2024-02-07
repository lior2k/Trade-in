import React from 'react';
import './Search.css';
import NavBar from '../../components/NavBar/NavBar';

import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';

import Footer from '../../components/Footer/Footer';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';

import { car, another_car } from '../../constants/cardata';
const Search = () => {
	const cars = [
		car,
		another_car,
		another_car,
		car,
		car,
		another_car,
		car,
		another_car,
		car,
		another_car,
		another_car,
		car,
		another_car,
		car,
		car,
		car,
	];
	return (
		<>
			<NavBar />
			<div className='search-page-container'>
				<SearchBar />
				<List title={'Search Results'} carsData={cars} />
			</div>
			<FloatingButtons />
			<Footer />
		</>
	);
};

export default Search;
