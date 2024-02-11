import React from 'react';
import './CarDetails.css';
import { Carousel } from 'react-responsive-carousel';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';
import { Icon } from '@iconify/react';

const CarDetails: React.FC<{
	carData: CarData;
	closePopUp: () => void;
	position: { top: string; left: string };
}> = ({ carData, closePopUp, position }) => {
	return (
		<>
			<div className='overlay' onClick={closePopUp}></div>

			<div
				className='selected-car-info-window'
				style={{ top: position.top, left: position.left }}
			>
				<button className='selected-car-close-button' onClick={closePopUp}>
					<Icon
						className='selected-car-close-icon'
						icon='material-symbols:close'
					></Icon>
				</button>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<span className='title'>{carData.title}</span>
					<Carousel showArrows={true} showThumbs={false}>
						{carData.images.map((image, index) => (
							<div key={index}>
								<img
									className='image'
									src={`${BACKEND_BASE_URL}/images/${image}`}
									alt={`Car ${index + 1}`}
								/>
							</div>
						))}
					</Carousel>
					<p>Year: {carData.year}</p>
					<p>Color: {carData.color}</p>
					<p>Kilometers: {carData.km}</p>
					<p>Previous Owners: {carData.previousOwners}</p>
					<p>Price: {carData.price}</p>
				</div>
			</div>
		</>
	);
};

export default CarDetails;
