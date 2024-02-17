import React, { useState } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import CarDetails from '../CarDetails/CarDetails';
import { CarData } from '../../constants/constants';

interface ListProps {
	carsData: CarData[];
}

const List: React.FC<ListProps> = ({ carsData }) => {
	const [selectedCar, setSelectedCar] = useState<CarData | null>(null);

	const handleCarClick = (car: CarData) => {
		setSelectedCar(car);
	};

	return (
		<>
			<div className='list-outer-container'>
				<div className='list'>
					{carsData.map((car: CarData, index: number) => (
						<ListItem
							carData={car}
							onPress={() => handleCarClick(car)}
							key={index}
						></ListItem>
					))}
				</div>
			</div>

			{selectedCar && (
				<CarDetails
					carData={selectedCar}
					closePopUp={() => setSelectedCar(null)}
				></CarDetails>
			)}
		</>
	);
};

export default List;
