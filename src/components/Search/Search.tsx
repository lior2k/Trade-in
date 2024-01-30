import React, { useState } from 'react';
import './Search.css';
import DualThumbSlider from './DualThumbSlider/DualThumbSlider';

type bodyStylesType = Record<string, boolean>;
const Search = () => {
	const [lowerBound, setLowerBound] = useState<number>(12000);
	const [upperBound, setUpperBound] = useState<number>(120000);
	const [priceRange, setPriceRange] = useState<number[]>([
		lowerBound,
		upperBound,
	]);

	const handleRangeChange = (priceRange: number[]) => {
		setPriceRange(priceRange);
		setLowerBound(priceRange[0]);
		setUpperBound(priceRange[1]);
	};

	const [bodyStyles, setBodyStyles] = useState<bodyStylesType>({
		electric: false,
		hybrid: false,
		luxury: false,
		sedan: false,
		sports: false,
		suv: false,
		truck: false,
		van: false,
		// motorcycle: false,
	});
	const styleToUrlMap: Record<string, string> = {
		electric: '/images/electric.png',
		hybrid: '/images/hybrid.webp',
		luxury: '/images/luxury.webp',
		sedan: '/images/sedan.png',
		sports: '/images/sports.png',
		suv: '/images/suv.webp',
		truck: '/images/truck.png',
		van: '/images/van.webp',
		// motorcycle: '/images/motorcycle.png',
	};

	const handleToggle = (option: string) => {
		setBodyStyles((prevOptions) => ({
			...prevOptions,
			[option]: !prevOptions[option],
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Perform actions based on the selected options
		console.log('Selected Options:', bodyStyles);
	};

	return (
		<div className='search-center-container'>
			<div className='search-flex-row-container'>
				<div className='search-flex-column-container'>
					<h3>Quick Search</h3>
					<form className='basic-search-form'>
						<select name='manufacturer' className='form-select'>
							<option value='' disabled selected>
								Manufacturer
							</option>
							<option value='manufacturer1'>Manufacturer 1</option>
							<option value='manufacturer2'>Manufacturer 2</option>
							<option value='manufacturer3'>Manufacturer 3</option>
						</select>

						<select name='model' className='form-select'>
							<option value='' disabled selected>
								Model
							</option>
							<option value='model1'>Model 1</option>
							<option value='model2'>Model 2</option>
							<option value='model3'>Model 3</option>
						</select>

						<button type='submit' className='form-submit'>
							Quick Search
						</button>
					</form>
				</div>

				<div className='search-flex-column-container'>
					<h3>Search by Body Style</h3>
					<form className='basic-search-form' onSubmit={(e) => handleSubmit(e)}>
						<ul className='body-type-list'>
							{Object.keys(bodyStyles).map((style: string) => {
								const imageSource: string = styleToUrlMap[style];
								return (
									<li key={style} onClick={() => handleToggle(style)}>
										<img className='image' src={imageSource} alt='Car'></img>
										<label style={{ zIndex: -1 }}>
											{style.charAt(0).toUpperCase() + style.slice(1)}
											<input
												type='checkbox'
												checked={bodyStyles[style]}
											></input>
										</label>
									</li>
								);
							})}
						</ul>

						<button type='submit' className='form-submit'>
							Search
						</button>
					</form>
				</div>

				<div className='search-flex-column-container'>
					<h3>Search by Budget Range</h3>
					<form className='basic-search-form'>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								margin: 24,
								justifyContent: 'space-between',
							}}
						>
							<input
								disabled={true}
								type='text'
								id='lowerBound'
								value={lowerBound}
							></input>

							<input
								disabled={true}
								type='text'
								id='upperBound'
								value={upperBound}
							></input>
						</div>
						<DualThumbSlider
							min={0}
							max={400000}
							values={priceRange}
							onChange={handleRangeChange}
						></DualThumbSlider>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Search;
