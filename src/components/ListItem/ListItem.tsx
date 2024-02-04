import React from 'react';
import './ListItem.css';
import { CarData } from '../../constants/cardata';

interface ListItemProps {
	carData: CarData;
	onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ carData, onPress }) => {
	return (
		<div className='item-container' onClick={onPress}>
			<p className='item-title'>{carData.title}</p>
			<div className='image-container'>
				<img className='image' src={`/images/${carData.image}`} alt='Car'></img>
			</div>
			<div className='item-footer-container'>
				<div className='data-container'>
					<p className='item-data'>Year: {carData.year}</p>
					<p className='item-data'>Kilometers: {carData.km}</p>
				</div>

				<div className='price-container'>
					<p className='item-data price'>{carData.price} ₪</p>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
