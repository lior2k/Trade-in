import React, { useState, useEffect } from 'react';
import './Search.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import CarService from '../../services/CarService';
import { CarData } from '../../constants/constants';

const Search = () => {
	const [carList, setCarList] = useState<CarData[]>([]);

	useEffect(() => {
		const fetchAllCars = async () => {
			try {
				const cars = await CarService.getAllCars();
				setCarList(cars);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllCars();
	}, []);

	return (
		<>
			<NavBar />
			<div className='search-page-container'>
				<SearchBar />
				<List title={'Search Results'} carsData={carList} />
			</div>
			<FloatingButtons />
			<Footer />
		</>
	);
};

export default Search;
