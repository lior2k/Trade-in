import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ListItem.css';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';

interface ListItemProps {
	carData: CarData;
	onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ carData, onPress }) => {
	return (
		<div className='item-container' id={carData._id} onClick={onPress}>
			<div className='item-header-container'>
				<div className='item-header-underline'>
					<p className='item-title'>{carData.title}</p>
				</div>
			</div>

			<div className='img-container'>
				<img
					className='image'
					src={`${BACKEND_BASE_URL}/images/${carData.images[0]}`}
					alt={`Car`}
				/>
			</div>

			<div className='item-footer-container'>
				<div className='data-container'>
					<p className='item-data'>{carData.previousOwners}</p>
					<p className='item-data'>יד</p>
				</div>
				<div className='data-container'>
					<p className='item-data'>{carData.year}</p>
					<p className='item-data'>שנה</p>
				</div>

				<div className='data-container'>
					<p className='item-data'>{carData.km}</p>
					<p className='item-data'>ק"מ</p>
				</div>

				<div className='data-container'>
					<p className='item-data price'>{carData.price} ₪</p>
					<p className='item-data price'>מחיר</p>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
