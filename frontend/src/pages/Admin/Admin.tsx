import React, { useState, useEffect } from 'react';
import './Admin.css';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import AddCar from './AddCar/AddCar';
import { CarData } from '../../constants/constants';
import CarService from '../../services/CarService';
import SearchHeader from '../Search/SearchHeader/SearchHeader';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import { useAuth } from '../../hooks/useAuth';

const Admin = () => {
	const { isAuthenticated, user } = useAuth();

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
				console.error('Error fetching front page cars', error);
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
				console.error('Error fetching all cars:', error);
			}
		};
		fetchAllCars();
	}, [carListTrigger]);

	const deleteCar = async (_id: string) => {
		try {
			await CarService.deleteCar(_id, user);
			// on successful delete - refresh lists
			refreshBothListsOnUpload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isAuthenticated ? (
				<>
					<header>
						<SearchHeader setCarList={setCarList} />
					</header>
					<main>
						<AddCar
							refreshMainListOnly={refreshMainListOnly}
							refreshBothListsOnUpload={refreshBothListsOnUpload}
						/>
						<List
							title='מוצגים בעמוד הבית'
							carsData={frontPageCars}
							adminProps={{
								deleteItem: deleteCar,
								isAuthenticated: isAuthenticated,
							}}
						></List>
						<List
							title='כל הרכבים'
							carsData={carList}
							adminProps={{
								deleteItem: deleteCar,
								isAuthenticated: isAuthenticated,
							}}
						></List>
						<FloatingButtons />
					</main>
					<footer>
						<Footer />
					</footer>
				</>
			) : (
				<div className='login-container'>
					<span className='main-title' style={{ color: '#FFF' }}>
						לא מאושר
					</span>
				</div>
			)}
		</>
	);
};

export default Admin;
