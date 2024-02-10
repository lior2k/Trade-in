import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Icon } from '@iconify/react';
import './ListItem.css';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';

interface ListItemProps {
	carData: CarData;
	onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ carData, onPress }) => {
	return (
		<div className='item-container' id={carData._id}>
			<div className='item-header-container'>
				<p className='item-title'>{carData.title}</p>
				<Icon
					onClick={onPress}
					className='item-icon'
					icon='pepicons-pencil:expand'
				></Icon>
			</div>

			<Carousel showArrows={true} showThumbs={false}>
				{carData.images.map((image, index) => (
					<div key={index} className='image-container'>
						<img
							className='image'
							src={`${BACKEND_BASE_URL}/images/${image}`}
							alt={`Car ${index + 1}`}
						/>
					</div>
				))}
			</Carousel>

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
