import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import CarDetails from '../CarDetails/CarDetails';
import { CarData, car, another_car } from '../../constants/cardata';
import axios from 'axios';

const List = () => {
	const demoCarList = [car, car, another_car, another_car];
	const [carList, setCarList] = useState<JSX.Element[]>([]);
	const [selectedCar, setSelectedCar] = useState<CarData | null>(null);
	useEffect(() => {
		// fetchPopularCars();
		let carArray = demoCarList.map((car: CarData) => (
			<ListItem carData={car} onPress={() => setSelectedCar(car)} />
		));
		setCarList(carArray);
	}, []);

	const fetchPopularCars = async () => {
		try {
			const response = await axios.get('url');
			// set car list
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			{/* list */}
			<div className='list-outer-container'>
				<span className='title'>On Sale</span>
				<div className='list'>{carList}</div>
			</div>

			{/* pop up window */}
			{selectedCar && (
				<div className='selected-car-info-window'>
					<button
						className='selected-car-close-button'
						onClick={() => {
							setSelectedCar(null);
						}}
					>
						<Icon
							className='selected-car-close-icon'
							icon='material-symbols:close'
						></Icon>
					</button>
					<CarDetails carData={selectedCar}></CarDetails>
				</div>
			)}
		</div>
	);
};

export default List;
