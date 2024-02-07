import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import CarDetails from '../CarDetails/CarDetails';
import { CarData } from '../../constants/cardata';
import axios from 'axios';

interface ListProps {
	title: string;
	carsData: CarData[];
}

const List: React.FC<ListProps> = ({ title, carsData }) => {
	const [renderedCarsList, setRenderedCarsList] = useState<JSX.Element[]>([]);
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
			const top = `${listItemRect.top}px`;
			const left = `${listItemRect.left}px`;
			setPopupPosition({ top, left });
		}
	};

	useEffect(() => {
		// fetchPopularCars();
		let carArray = carsData.map((car: CarData, index: number) => (
			<ListItem
				carData={{ ...car, id: index.toString() }}
				onPress={() => handleCarClick({ ...car, id: index.toString() })}
				id={index.toString()}
			/>
		));
		setRenderedCarsList(carArray);
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
				<div className='list'>{renderedCarsList}</div>
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
