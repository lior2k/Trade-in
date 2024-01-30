import React from 'react';
import './ListItem.css';
import { CarData } from '../../constants/cardata';

const ListItem: React.FC<{ carData: CarData }> = ({ carData }) => {
	return (
		<div className='item-container'>
			<div className='left-side-container'>
				<h2 className='item-title'>{carData.title}</h2>

				<p className='item-data'>Color: {carData.color}</p>
				<p className='item-data'>Year: {carData.year}</p>
				<p className='item-data'>KM: {carData.km}</p>
				<p className='item-data'>Previous Owners: {carData.previous_owners}</p>
				<p className='item-data'>Price: {carData.price} NIS</p>
			</div>

			<div className='right-side-container'>
				<img className='image' src={`/images/${carData.image}`} alt='Car'></img>
			</div>
		</div>
	);
};

export default ListItem;
