import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import CarDetails from '../CarDetails/CarDetails';
import { CarData, car, another_car } from '../../constants/cardata';
import axios from 'axios';

interface ListProps {
	title: string;
}

const List: React.FC<ListProps> = ({ title }) => {
	const demoCarList = [car, car, another_car, another_car];
	const [carList, setCarList] = useState<JSX.Element[]>([]);
	const [selectedCar, setSelectedCar] = useState<CarData | null>(null);
	const [popupPosition, setPopupPosition] = useState({
		top: '50%',
		left: '50%',
	});

	const handleCarClick = (car: CarData) => {
		setSelectedCar(car);
		const listItem = document.getElementById(`car-${car.id}`);
		if (listItem) {
			const listItemRect = listItem.getBoundingClientRect();
			const top = `${listItemRect.top + listItemRect.height}px`;
			const left = `${listItemRect.left + listItemRect.width / 2}px`;
			setPopupPosition({ top, left });
		}
	};

	useEffect(() => {
		// fetchPopularCars();
		let carArray = demoCarList.map((car: CarData, index: number) => (
			<ListItem
				carData={{ ...car, id: index.toString() }}
				onPress={() => handleCarClick({ ...car, id: index.toString() })}
				id={index.toString()}
			/>
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
		<>
			{/* list */}
			<div className='list-outer-container'>
				<span className='list-title'>{title}</span>
				<div className='list'>{carList}</div>
			</div>

			{/* pop up window */}
			{selectedCar && (
				<CarDetails
					carData={selectedCar}
					closePopUp={() => setSelectedCar(null)}
					position={popupPosition}
				></CarDetails>
			)}
		</>
	);
};

export default List;
