import React, { useState } from 'react';
import './BodyBasedSearch.css';
import { useNavigate } from 'react-router-dom';
import CarService from '../../../services/CarService';

const BodyBasedSearch: React.FC = () => {
	const navigate = useNavigate();
	const [bodyStyles, setBodyStyles] = useState<Record<string, boolean>>({
		electric: false,
		hybrid: false,
		luxury: false,
		sedan: false,
		sports: false,
		suv: false,
		truck: false,
		van: false,
	});

	const handleBodyStyleToggle = (option: string) => {
		setBodyStyles((prevOptions) => ({
			...prevOptions,
			[option]: !prevOptions[option],
		}));
	};

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Create an array of selected body styles
		const selectedStyles = Object.keys(bodyStyles).filter(
			(style) => bodyStyles[style]
		);
		// Check if all body styles are false
		if (selectedStyles.length === 0) {
			alert('Select at least one body style');
			return;
		}
		try {
			const cars = await CarService.getCarsByBodyStyle(selectedStyles);
			navigate('/search', { state: { cars } });
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<>
			<form className='basic-search-form' onSubmit={handleFormSubmit}>
				<ul className='body-type-list'>
					{Object.keys(bodyStyles).map((style: string) => {
						return (
							<li key={style} onClick={() => handleBodyStyleToggle(style)}>
								<img
									className='image'
									src={`/images/${style}.png`}
									alt='Car'
								></img>
								<p style={{ margin: '0 2px', padding: '2px' }}>
									{style.charAt(0).toUpperCase() + style.slice(1)}
									<input
										type='checkbox'
										checked={bodyStyles[style]}
										style={{ cursor: 'pointer' }}
									></input>
								</p>
							</li>
						);
					})}
				</ul>

				<button type='submit' className='form-submit'>
					Search
				</button>
			</form>
		</>
	);
};

export default BodyBasedSearch;
