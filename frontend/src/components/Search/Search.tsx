import './Search.css';
import { useState } from 'react';
import BasicSearch from './BasicSearch/BasicSearch';
import BodyBasedSearch from './BodyBasedSearch/BodyBasedSearch';
import RangeBasedSearch from './RangeBasedSearch/RangeBasedSearch';
import CarService from '../../services/CarService';
import { useNavigate } from 'react-router-dom';
import SearchButton from '../SearchButton/SearchButton';

const Search = () => {
	const navigate = useNavigate();

	const [lowerBound, setLowerBound] = useState<number>(24000);
	const [upperBound, setUpperBound] = useState<number>(64000);
	const [range, setRange] = useState<number[]>([lowerBound, upperBound]);

	const handleRangeFormSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		try {
			const cars = await CarService.getCarsByBudget(lowerBound, upperBound);
			navigate('/search', { state: { cars } });
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<div className='search-outer-container'>
			<div className='search-center-container'>
				<h2 className='main-title'>איך תרצו לחפש את הרכב החדש שלכם?</h2>

				<div className='search-flex-row-container'>
					<div className='search-flex-column-container'>
						<h3 className='secondary-title'>חיפוש לפי יצרן ומודל</h3>
						<BasicSearch />
					</div>

					<div className='search-flex-column-container'>
						<h3 className='secondary-title'>חיפוש לפי סוג שילדה</h3>
						<BodyBasedSearch />
					</div>

					<div className='search-flex-column-container'>
						<h3 className='secondary-title'>חיפוש לפי טווח מחירים</h3>
						<form
							className='range-search-form'
							onSubmit={handleRangeFormSubmit}
						>
							<RangeBasedSearch
								lowerBound={lowerBound}
								setLowerBound={setLowerBound}
								lowerBoundText='מחיר מינימלי'
								upperBound={upperBound}
								setUpperBound={setUpperBound}
								upperBoundText='מחיר מקסימלי'
								minValue={0}
								maxValue={250000}
								range={range}
								setRange={setRange}
								step={1000}
								type='price'
							></RangeBasedSearch>
						</form>

						<SearchButton style={{ padding: '16px', margin: '16px' }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
