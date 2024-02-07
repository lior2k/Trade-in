import React, { useState } from 'react';
import './SearchBar.css';
import BasicSearch from '../Search/BasicSearch/BasicSearch';
import BodyBasedSearch from '../Search/BodyBasedSearch/BodyBasedSearch';
import RangeBasedSearch from '../Search/RangeBasedSearch/RangeBasedSearch';
import { Icon } from '@iconify/react';

const SearchBar = () => {
	const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] =
		useState<boolean>(false);
	const [yearLowerBound, setYearLowerBound] = useState<number>(2010);
	const [yearUpperBound, setYearUpperBound] = useState<number>(2020);

	const [priceLowerBound, setPriceLowerBound] = useState<number>(12000);
	const [priceUpperBound, setPriceUpperBound] = useState<number>(120000);

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

	return (
		<div className='search-bar-outer-container'>
			<div className='basic-search-container'>
				<BasicSearch></BasicSearch>
			</div>

			<button
				className='advanced-search-button icon-button'
				onClick={() => setIsAdvancedSearchOpen(true)}
			>
				Advanced Search
				<Icon icon='mingcute:settings-2-line'></Icon>
			</button>

			<button className='search-button icon-button'>
				<Icon icon='material-symbols:search'></Icon>
			</button>

			{isAdvancedSearchOpen && (
				<>
					<div
						className='overlay'
						onClick={() => setIsAdvancedSearchOpen(false)}
					></div>

					<div className='advanced-search-window'>
						<div className='advanced-search-window-top-section'>
							<p>Erase All</p>
							<h3>Advanced Search</h3>
							<button
								className='close-button'
								onClick={() => setIsAdvancedSearchOpen(false)}
							>
								<Icon
									className='selected-car-close-icon'
									icon='material-symbols:close'
								></Icon>
							</button>
						</div>
						<div className='advanced-search-window-form'>
							<BasicSearch></BasicSearch>

							<label>Year:</label>
							<RangeBasedSearch
								minValue={1990}
								maxValue={2024}
								lowerBound={yearLowerBound}
								setLowerBound={setYearLowerBound}
								upperBound={yearUpperBound}
								setUpperBound={setYearUpperBound}
								step={1}
							></RangeBasedSearch>

							<label>Price Range:</label>
							<RangeBasedSearch
								minValue={0}
								maxValue={400000}
								lowerBound={priceLowerBound}
								setLowerBound={setPriceLowerBound}
								upperBound={priceUpperBound}
								setUpperBound={setPriceUpperBound}
								step={1000}
								type='price'
							></RangeBasedSearch>

							<label>Body Style:</label>
							<BodyBasedSearch
								bodyStyles={bodyStyles}
								handleBodyStyleToggle={handleBodyStyleToggle}
							></BodyBasedSearch>

							<button type='submit' className='form-submit'>
								Search
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default SearchBar;
