import './Search.css';
import BasicSearch from './BasicSearch/BasicSearch';
import BodyBasedSearch from './BodyBasedSearch/BodyBasedSearch';
import RangeBasedSearch from './RangeBasedSearch/RangeBasedSearch';

const Search = () => {
	return (
		<div className='search-outer-container'>
			<div className='search-center-container'>
				<h2 className='main-title'>איך תרצו לחפש את הרכב החדש שלכם?</h2>

				<div className='search-flex-row-container'>
					<div className='search-flex-column-container'>
						<h3 className='secondary-title'>חיפוש לפי יצרן ומודל</h3>
						<BasicSearch direction='column' />
					</div>

					<div className='search-flex-column-container'>
						<h3 className='secondary-title'>חיפוש לפי סוג שילדה</h3>
						<BodyBasedSearch />
					</div>

					<div className='search-flex-column-container'>
						<h3 className='secondary-title'>חיפוש לפי טווח מחירים</h3>
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
