import { useState, useEffect } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomePageCarousel from './HomePageCarousel/HomePageCarousel';
import Search from '../../components/Search/Search';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import Footer from '../../components/Footer/Footer';
import CarService from '../../services/CarService';
import { CarData } from '../../constants/constants';
import WidgetBox from '../../components/WidgetBox/WidgetBox';

const Home = () => {
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
	}, []);

	return (
		<>
			<header>
				<HomeHeader />
			</header>
			<main>
				<HomePageCarousel carList={frontPageCars} />
				<Search />
				<WidgetBox />
				<FloatingButtons />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;
