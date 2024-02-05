import React from 'react';
import './CarDetails.css';
import { CarData } from '../../constants/cardata';

const CarDetails: React.FC<{ carData: CarData }> = ({ carData }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<span className='title'>{carData.title}</span>
			<img
				style={{ maxHeight: 200, maxWidth: 300 }}
				src={`/images/${carData.image}`}
				alt='Car'
			></img>
			<p>Year: {carData.year}</p>
			<p>Color: {carData.color}</p>
			<p>Kilometers: {carData.km}</p>
			<p>Previous Owners: {carData.previous_owners}</p>
			<p>Price: {carData.price}</p>
		</div>
	);
};

export default CarDetails;
