import { useState, useEffect } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
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
		<div className='home-container'>
			<HomeHeader />
			<div className='bradius top-minus bgwhite'>
				<h2 className='section-title'>רכבים מובילים</h2>
				<List carsData={frontPageCars} />
				<Search />
				<Footer />
			</div>
			<FloatingButtons />
		</div>
	);
};

export default Home;
