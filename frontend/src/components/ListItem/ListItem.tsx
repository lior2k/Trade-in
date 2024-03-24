import React from 'react';
import './ListItem.css';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';
import { Icon } from '@iconify/react';

interface ListItemProps {
	carData: CarData;
	onPress: () => void;
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	margin?: string;
	flex?: number;
	adminProps?: { deleteItem: (_id: string) => void; isAuthenticated: boolean };
}

const ListItem: React.FC<ListItemProps> = ({
	carData,
	onPress,
	width,
	minWidth,
	maxWidth,
	margin,
	flex,
	adminProps,
}) => {
	return (
		<div
			className='item-container bradius bgwhite'
			id={carData._id}
			style={{
				width: width,
				maxWidth: maxWidth,
				minWidth: minWidth,
				margin: margin,
				flex: flex,
			}}
		>
			<div className='image-wrapper'>
				{adminProps?.isAuthenticated && (
					<button
						className='delete-item-button'
						onClick={() => adminProps?.deleteItem(carData._id)}
					>
						למחיקה לחץ כאן
					</button>
				)}
				<img
					src={`${BACKEND_BASE_URL}/images/${carData.images[0]}`}
					alt='Car'
				/>
			</div>

			<div className='bottom-section-wrapper'>
				<div className='car-title-wrapper'>
					<span className='mini-title' onClick={onPress}>
						{carData.title}
					</span>
				</div>

				<div className='car-data-wrapper'>
					<div className='car-data-inner-wrapper mobile-hidden'>
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
					<span className='mini-title'>{carData.price.toLocaleString()}₪</span>

					<span className='theme-link-text' onClick={onPress}>
						לפרטים
						<Icon icon='uit:arrow-up-left'></Icon>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
