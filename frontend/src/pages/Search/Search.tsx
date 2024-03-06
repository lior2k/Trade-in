import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchHeader from './SearchHeader/SearchHeader';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import CarService from '../../services/CarService';
import { CarData } from '../../constants/constants';
import { useLocation } from 'react-router-dom';

const Search = () => {
	const [carList, setCarList] = useState<CarData[]>([]);
	const location = useLocation();
	const { state } = location;

	useEffect(() => {
		const fetchData = async () => {
			try {
				let cars;

				// Check if search results are present in the location state
				if (state && state.cars) {
					cars = state.cars;
				} else {
					// Fetch all cars if no search results
					cars = await CarService.getAllCars();
				}

				setCarList(cars);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [state]);

	return (
		<div className='search-page-container'>
			<SearchHeader />
			<List carsData={carList} />
			<FloatingButtons />
			<Footer />
		</div>
	);
};

export default Search;
