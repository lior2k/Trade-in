import React from 'react';
import './ListItem.css';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';
import { Icon } from '@iconify/react';

interface ListItemProps {
	carData: CarData;
	onPress: () => void;
	style?: React.CSSProperties;
}

const ListItem: React.FC<ListItemProps> = ({ carData, onPress, style }) => {
	return (
		<div
			className='item-container bradius bgwhite'
			id={carData._id}
			onClick={onPress}
			// style={style}
		>
			<div className='image-wrapper'>
				<img
					src={`${BACKEND_BASE_URL}/images/${carData.images[0]}`}
					alt='Car'
				/>
			</div>

			<div className='bottom-section-wrapper'>
				<div className='car-title-wrapper'>
					<span className='car-title'>
						{carData.manufacturer} {carData.model}
					</span>
				</div>

				<div className='car-data-wrapper'>
					<div className='car-data-inner-wrapper'>
						<Icon icon='et:speedometer'></Icon>
						<span className=''>{carData.km} ק"מ</span>
					</div>

					<div className='car-data-inner-wrapper'>
						<Icon icon='f7:hand-raised'></Icon>
						<span className=''>יד {carData.previousOwners}</span>
					</div>

					<div className='car-data-inner-wrapper'>
						<Icon icon='clarity:date-line'></Icon>
						<span className=''>שנה {carData.year}</span>
					</div>
				</div>

				<div className='car-price-wrapper'>
					<span className='price'>{carData.price.toLocaleString()}₪</span>

					<span className='theme-link-text'>
						לפרטים
						<Icon icon='uit:arrow-up-left'></Icon>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
