import React, { useState } from 'react';
import './Search.css';
import BasicSearch from './BasicSearch/BasicSearch';
import BodyBasedSearch from './BodyBasedSearch/BodyBasedSearch';
import RangeBasedSearch from './RangeBasedSearch/RangeBasedSearch';

const Search = () => {
	const [lowerBound, setLowerBound] = useState<number>(12000);
	const [upperBound, setUpperBound] = useState<number>(120000);

	const [bodyStyles, setBodyStyles] = useState<Record<string, boolean>>({
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

	const handleBodyStyleToggle = (option: string) => {
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
							<BasicSearch></BasicSearch>
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
							<BodyBasedSearch
								bodyStyles={bodyStyles}
								handleBodyStyleToggle={handleBodyStyleToggle}
							></BodyBasedSearch>

							<button type='submit' className='form-submit'>
								Search
							</button>
						</form>
					</div>

					<div className='search-flex-column-container'>
						<h3>Search by Budget Range</h3>
						<form className='basic-search-form'>
							<RangeBasedSearch
								minValue={0}
								maxValue={400000}
								lowerBound={lowerBound}
								setLowerBound={setLowerBound}
								upperBound={upperBound}
								setUpperBound={setUpperBound}
								step={1000}
							></RangeBasedSearch>
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
