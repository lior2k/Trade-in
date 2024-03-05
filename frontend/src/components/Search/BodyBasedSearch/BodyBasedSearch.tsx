import React, { useState } from 'react';
import './BodyBasedSearch.css';
import { useNavigate } from 'react-router-dom';
import CarService from '../../../services/CarService';
import SearchButton from '../../SearchButton/SearchButton';

const BodyBasedSearch: React.FC = () => {
	const navigate = useNavigate();
	const [bodyStyles, setBodyStyles] = useState<Record<string, boolean>>({
		חשמלי: false,
		היברידי: false,
		יוקרה: false,
		משפחתי: false,
		ספורט: false,
		"ג'יפ": false,
		'7 מקומות': false,
		מסחרי: false,
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
			<form className='search-form' onSubmit={handleFormSubmit}>
				<ul className='body-type-list'>
					{Object.keys(bodyStyles).map((style: string) => {
						return (
							<li key={style} onClick={() => handleBodyStyleToggle(style)}>
								<img
									className='image'
									src={`/images/${style}.png`}
									alt='Car'
								></img>
								<span style={{ margin: '0 2px', padding: '2px' }}>
									{style}
									<input
										type='checkbox'
										checked={bodyStyles[style]}
										style={{ cursor: 'pointer' }}
									></input>
								</span>
							</li>
						);
					})}
				</ul>

				<SearchButton
					text='חיפוש'
					type='submit'
					icon='material-symbols:search'
					style={{ margin: '16px', padding: '16px' }}
				/>
			</form>
		</>
	);
};

export default BodyBasedSearch;
