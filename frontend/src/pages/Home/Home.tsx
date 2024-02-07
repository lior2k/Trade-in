import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import Footer from '../../components/Footer/Footer';
import CarService from '../../services/CarService';
import { CarData } from '../../constants/cardata';
import './Home.css';

const Home = () => {
	const [onSaleCars, setOnSaleCars] = useState<CarData[]>([]);

	useEffect(() => {
		const fetchOnSaleCars = async () => {
			try {
				const cars = await CarService.getAllCars();
				for (let i = 0; i < cars.length; i++) {
					cars[i].image = '../../images/hyundai.jpg';
					cars[i].id = i.toString();
				}
				setOnSaleCars(cars);
			} catch (error) {
				console.log(error);
			}
		};

		fetchOnSaleCars();
	}, []);

	return (
		<>
			<NavBar />
			<div className='home-container'>
				<List title='On Sale' carsData={onSaleCars} />
				<Search />
				<FloatingButtons />
			</div>
			<Footer />
		</>
	);
};

export default Home;
