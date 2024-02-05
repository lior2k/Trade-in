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

	const handleLowerBoundChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		// Parse the string value to a number
		const numericValue = parseInt(event.target.value, 10);
		if (numericValue > 400000 || numericValue < 0) {
			return;
		}
		// Check if the parsing is successful
		if (numericValue <= upperBound) {
			setLowerBound(numericValue);
			setPriceRange((prevPriceRange: number[]) => [
				numericValue,
				prevPriceRange[1],
			]);
		} else {
			setPriceRange([numericValue, numericValue]);
			setLowerBound(numericValue);
			setUpperBound(numericValue);
		}
	};

	const handleUpperBoundChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		// Parse the string value to a number
		const numericValue = parseInt(event.target.value, 10);
		if (numericValue > 400000 || numericValue < 0) {
			return;
		}
		// Check if the parsing is successful
		if (numericValue >= lowerBound) {
			setUpperBound(numericValue);
			setPriceRange((prevPriceRange: number[]) => [
				prevPriceRange[0],
				numericValue,
			]);
		} else {
			setPriceRange([numericValue, numericValue]);
			setLowerBound(numericValue);
			setUpperBound(numericValue);
		}
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
		<div className='search-outer-container'>
			<div className='search-center-container'>
				<span className='title'>Find Your New Car</span>

				<div className='search-flex-row-container'>
					<div className='search-flex-column-container'>
						<h3>Quick Search</h3>
						<form className='basic-search-form'>
							<label className='form-label'>
								Manufacturer:
								<input
									type='text'
									name='manufacturer'
									list='manufacturers'
									className='form-input'
									onChange={() => {}}
								/>
								<datalist id='manufacturers'>
									<option value='Manufacturer 1' />
									<option value='Manufacturer 2' />
									<option value='Manufacturer 3' />
								</datalist>
							</label>

							<label className='form-label'>
								Model:
								<input
									type='text'
									name='model'
									list='models'
									className='form-input'
									onChange={() => {}}
								/>
								<datalist id='models'>
									<option value='Model 1' />
									<option value='Model 2' />
									<option value='Model 3' />
								</datalist>
							</label>

							<button type='submit' className='form-submit'>
								Quick Search
							</button>
						</form>
					</div>

					<div className='search-flex-column-container'>
						<h3>Search by Body Style</h3>
						<form
							className='basic-search-form'
							onSubmit={(e) => handleSubmit(e)}
						>
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
							<div className='range-inputs'>
								<div className='input-container'>
									<input
										className='range'
										type='number'
										id='lowerBound'
										value={lowerBound}
										onChange={handleLowerBoundChange}
									></input>
									<label>Minimum Price</label>
								</div>

								<div className='input-container'>
									<input
										className='range'
										type='number'
										id='upperBound'
										value={upperBound}
										onChange={handleUpperBoundChange}
									></input>
									<label>Maximum Price</label>
								</div>
							</div>
							<DualThumbSlider
								min={0}
								max={400000}
								values={priceRange}
								onChange={handleRangeChange}
							></DualThumbSlider>
							<button type='submit' className='form-submit'>
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
