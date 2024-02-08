import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import Footer from '../../components/Footer/Footer';
import CarService from '../../services/CarService';
import { CarData } from '../../constants/constants';
import './Home.css';

const Home = () => {
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

	return (
		<>
			<NavBar />
			<div className='home-container'>
				<List title='On Sale' carsData={frontPageCars} />
				<Search />
				<FloatingButtons />
			</div>
			<Footer />
		</>
	);
};

export default Home;
