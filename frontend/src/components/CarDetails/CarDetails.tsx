import React from 'react';
import './CarDetails.css';
import { CarData } from '../../constants/constants';
import { Icon } from '@iconify/react';
import ImageSlider from '../ImageSlider/ImageSlider';

const CarDetails: React.FC<{
	carData: CarData;
	closePopUp: () => void;
}> = ({ carData, closePopUp }) => {
	return (
		<>
			<div className='overlay' onClick={closePopUp}></div>

			<div className='popup-window bradius' style={{ maxWidth: '540px' }}>
				<div className='popup-window-top-section'>
					<span className='mini-title'>{carData.title}</span>

					<button className='close-button' onClick={closePopUp}>
						<Icon icon='material-symbols:close'></Icon>
					</button>
				</div>

				<div className='popup-window-inner-container'>
					<div className='image-slider'>
						<ImageSlider images={carData.images} />
					</div>

					<div>
						<h3 className='mini-title'>תיאור</h3>
						<span className='description'>
							מטופלת כחדשה ללא תאונות ,התחייבות בבדיקה על הכל +דגם LE +מולטי
							מדיה ,מצלמת רוורס ,קודנית ,גנטים מגנזיום +100% מימון,צקים,הוראת
							קבע,אשראי,אפשרות החלפה גמיש
						</span>
					</div>

					<h3 className='mini-title'>פרטים נוספים</h3>
					<div className='info-footer-outer-container'>
						<div className='info-footer-middle-container'>
							<div className='info-footer-inner-container'>
								<span className='data'>יד</span>
								<span className='data'>צבע</span>
								<span className='data'>סוג מנוע</span>
								<span className='data'>?</span>
							</div>
							<div className='info-footer-inner-container'>
								<span className='data'>{carData.previousOwners}</span>
								<span className='data'>{carData.color}</span>
								<span className='data'>סוג מנוע</span>
								<span className='data'>?</span>
							</div>
						</div>

						<div className='info-footer-middle-container'>
							<div className='info-footer-inner-container'>
								<span className='data'>ק"מ</span>
								<span className='data'>שנה</span>
								<span className='data'>נפח מנוע</span>

								<span className='data'>מחיר</span>
							</div>
							<div className='info-footer-inner-container'>
								<span className='data'>{carData.km}</span>
								<span className='data'>{carData.year}</span>
								<span className='data'>נפח מנוע</span>
								<span className='data price'>
									{carData.price.toLocaleString()} ₪
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarDetails;
