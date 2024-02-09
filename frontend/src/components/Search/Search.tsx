import './Search.css';
import BasicSearch from './BasicSearch/BasicSearch';
import BodyBasedSearch from './BodyBasedSearch/BodyBasedSearch';
import RangeBasedSearch from './RangeBasedSearch/RangeBasedSearch';

const Search = () => {
	return (
		<div className='search-outer-container'>
			<div className='search-center-container'>
				<span className='title'>Find Your New Car</span>

				<div className='search-flex-row-container'>
					<div className='search-flex-column-container'>
						<h3>Quick Search</h3>
						<BasicSearch direction='column' />
					</div>

					<div className='search-flex-column-container'>
						<h3>Search by Body Style</h3>
						<BodyBasedSearch />
					</div>

					<div className='search-flex-column-container'>
						<h3>Search by Budget Range</h3>
						<RangeBasedSearch
							minValue={0}
							maxValue={400000}
							initialValueLow={12000}
							initialValueHigh={120000}
							step={1000}
							type='price'
						></RangeBasedSearch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
