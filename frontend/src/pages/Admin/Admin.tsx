import React, { useState, useEffect } from 'react';
import './Admin.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import AddCar from './AddCar/AddCar';
import { CarData } from '../../constants/constants';
import CarService from '../../services/CarService';

const Admin = () => {
	const [frontPageCars, setFrontPageCars] = useState<CarData[]>([]);
	useEffect(() => {
		const fetchFrontPageCars = async () => {
			try {
				const cars = await CarService.getFrontPageCars();
				setFrontPageCars(cars);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFrontPageCars();
	}, []);

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
			<div
				className='admin-container'
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<AddCar />
				<SearchBar />

				<List title='On Sale' carsData={frontPageCars}></List>
				<List title='Search Results' carsData={carList}></List>
			</div>
			<Footer />
		</>
	);
};

export default Admin;
