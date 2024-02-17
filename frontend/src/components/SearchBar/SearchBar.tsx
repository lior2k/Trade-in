import { useState } from 'react';
import './SearchBar.css';
import BasicSearch from '../Search/BasicSearch/BasicSearch';
import BodyBasedSearch from '../Search/BodyBasedSearch/BodyBasedSearch';
import RangeBasedSearch from '../Search/RangeBasedSearch/RangeBasedSearch';
import SearchButton from '../SearchButton/SearchButton';
import { Icon } from '@iconify/react';

const SearchBar = () => {
	const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] =
		useState<boolean>(false);

	return (
		<div className='search-bar-outer-container'>
			<BasicSearch direction='row' />
			<SearchButton
				type='button'
				text='חיפוש מתקדם'
				icon='carbon:search-advanced'
				onPress={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
			></SearchButton>

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
							<BasicSearch direction='column' />

							<label>Year:</label>
							<RangeBasedSearch
								minValue={1990}
								maxValue={2024}
								initialValueLow={2008}
								initialValueHigh={2020}
								step={1}
							></RangeBasedSearch>

							<label>Price Range:</label>
							<RangeBasedSearch
								minValue={0}
								maxValue={400000}
								initialValueLow={12000}
								initialValueHigh={120000}
								step={1000}
								type='price'
							></RangeBasedSearch>

							<label>Body Style:</label>
							<BodyBasedSearch />

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
