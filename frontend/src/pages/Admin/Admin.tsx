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
	const [frontPageTrigger, setFrontPageTrigger] = useState<boolean>(false);
	const [carListTrigger, setCarListTrigger] = useState<boolean>(false);
	const refreshBothListsOnUpload = () => {
		setFrontPageTrigger(!frontPageTrigger);
		setCarListTrigger(!carListTrigger);
	};
	const refreshMainListOnly = () => {
		setCarListTrigger(!carListTrigger);
	};
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
	}, [frontPageTrigger]);

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
	}, [carListTrigger]);

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
				<AddCar
					refreshMainListOnly={refreshMainListOnly}
					refreshBothListsOnUpload={refreshBothListsOnUpload}
				/>
				<SearchBar setCarList={setCarList} />

				<h3 className='main-title'>רכבים מובילים</h3>
				<List carsData={frontPageCars}></List>
				{/* <h3 className='main-title'>רכבים מובילים</h3> */}
				<List carsData={carList}></List>
			</div>
			<Footer />
		</>
	);
};

export default Admin;
