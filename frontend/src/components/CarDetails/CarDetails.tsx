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
							<p className='data price'>{carData.price} ₪</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarDetails;
