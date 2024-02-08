import React from 'react';
import './ListItem.css';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';

interface ListItemProps {
	carData: CarData;
	onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ carData, onPress }) => {
	return (
		<div className='item-container' onClick={onPress} id={carData._id}>
			<p className='item-title'>{carData.title}</p>
			<div className='image-container'>
				<img
					className='image'
					src={`${BACKEND_BASE_URL}/${carData.images[0]}`}
					alt='Car'
				></img>
			</div>
			<div className='item-footer-container'>
				<div className='data-container'>
					<p className='item-data'>Year: {carData.year}</p>
					<p className='item-data'>Km: {carData.km}</p>
				</div>

				<div className='price-container'>
					<p className='item-data price'>{carData.price} ₪</p>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
