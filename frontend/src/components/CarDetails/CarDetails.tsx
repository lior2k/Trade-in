import React from 'react';
import './CarDetails.css';
import { CarData, BACKEND_BASE_URL } from '../../constants/constants';
import { Icon } from '@iconify/react';

const CarDetails: React.FC<{
	carData: CarData;
	closePopUp: () => void;
}> = ({ carData, closePopUp }) => {
	return (
		<>
			<div className='overlay' onClick={closePopUp}></div>

			<div className='selected-car-info-window'>
				<button className='selected-car-close-button' onClick={closePopUp}>
					<Icon
						className='selected-car-close-icon'
						icon='material-symbols:close'
					></Icon>
				</button>

				<div className='selected-car-info-inner-container'>
					<p className='item-title'>{carData.title}</p>
					{/* <Carousel showArrows={true} showThumbs={false}>
						{carData.images.map((image, index) => (
							<div key={index}>
								<img
									className='image'
									src={`${BACKEND_BASE_URL}/images/${image}`}
									alt={`Car ${index + 1}`}
								/>
							</div>
						))}
					</Carousel> */}

					<img
						className='image'
						src={`${BACKEND_BASE_URL}/images/${carData.images[0]}`}
						alt={`Car`}
					/>

					<p className='description'>
						מטופלת כחדשה ללא תאונות ,התחייבות בבדיקה על הכל +דגם LE +מולטי מדיה
						,מצלמת רוורס ,קודנית ,גנטים מגנזיום +100% מימון,צקים,הוראת
						קבע,אשראי,אפשרות החלפה גמיש
					</p>

					<h3 className='secondary-title'>פרטים נוספים</h3>
					<div className='info-footer-outer-container'>
						<div className='info-footer-inner-container'>
							<p className='data grey'>יד</p>
							<p className='data grey'>צבע</p>
							<p className='data grey'>סוג מנוע</p>
							<p className='data grey'>?</p>
						</div>
						<div className='info-footer-inner-container'>
							<p className='data'>{carData.previousOwners}</p>
							<p className='data'>{carData.color}</p>
							<p className='data'>סוג מנוע</p>
							<p className='data'>?</p>
						</div>

						<div className='info-footer-inner-container'>
							<p className='data grey'>קילומטראז'</p>
							<p className='data grey'>שנה</p>
							<p className='data grey'>נפח מנוע</p>

							<p className='data grey'>מחיר</p>
						</div>
						<div className='info-footer-inner-container'>
							<p className='data'>{carData.km}</p>
							<p className='data'>{carData.year}</p>
							<p className='data'>נפח מנוע</p>
							<p className='data price'>{carData.price}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarDetails;
