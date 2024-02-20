import { useState } from 'react';
import './SearchBar.css';
import SearchButton from '../SearchButton/SearchButton';
import { Icon } from '@iconify/react';
import CarService from '../../services/CarService';
import { CarModels } from '../../constants/constants';
import ExpandingInput from '../ExpandingInput/ExpandingInput';
import RangeBasedSearch from '../Search/RangeBasedSearch/RangeBasedSearch';
import { CarData } from '../../constants/constants';

interface SearchBarProps {
	setCarList: React.Dispatch<React.SetStateAction<CarData[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setCarList }) => {
	const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] =
		useState<boolean>(false);

	const [yearLowerBound, setYearLowerBound] = useState<number>(2008);
	const [yearUpperBound, setYearUpperBound] = useState<number>(2018);
	const [yearRange, setYearRange] = useState<number[]>([
		yearLowerBound,
		yearUpperBound,
	]);

	const [priceLowerBound, setPriceLowerBound] = useState<number>(24000);
	const [priceUpperBound, setPriceUpperBound] = useState<number>(64000);
	const [priceRange, setPriceRange] = useState<number[]>([
		priceLowerBound,
		priceUpperBound,
	]);

	const [showManufacturerList, setShowManufacturerList] =
		useState<boolean>(false);
	const [manufacturer, setManufacturer] = useState<string>('');
	const [showModelList, setShowModelList] = useState<boolean>(false);
	const [model, setModel] = useState<string>('');

	const resetForm = () => {
		setManufacturer('');
		setModel('');
		setYearLowerBound(2008);
		setYearUpperBound(2018);
		setYearRange([2008, 2018]);
		setPriceLowerBound(24000);
		setPriceUpperBound(64000);
		setPriceRange([24000, 64000]);
	};

	const searchByManufacturerAndModel = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		if (manufacturer === '' && model === '') {
			alert('בחר יצרן ו/או מודל');
			return;
		}
		try {
			const cars = await CarService.getCarsByManufacturerAndModel(
				manufacturer,
				model
			);
			setCarList(cars);
		} catch (error) {
			console.error('fetching by manufacturer and model error:', error);
		}
	};

	const searchByAllParameters = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		try {
			const cars = await CarService.getCarsByParameters(
				manufacturer,
				model,
				yearLowerBound,
				yearUpperBound,
				priceLowerBound,
				priceUpperBound
			);
			setCarList(cars);
			setIsAdvancedSearchOpen(false);
		} catch (error) {
			console.error('advanced search fetching error:', error);
		}
	};

	return (
		<div className='search-bar-outer-container'>
			<form className='form-flex-row' onSubmit={searchByManufacturerAndModel}>
				<ExpandingInput
					isExpanded={showManufacturerList}
					setIsExpanded={setShowManufacturerList}
					value={manufacturer}
					setValue={setManufacturer}
					placeHolder='יצרן'
					listToRender={Object.keys(CarModels)}
					style={{ width: '25%' }}
				/>

				<ExpandingInput
					isExpanded={showModelList}
					setIsExpanded={setShowModelList}
					value={model}
					setValue={setModel}
					placeHolder='מודל'
					listToRender={
						manufacturer !== ''
							? CarModels[manufacturer]
							: Object.values(CarModels).reduce(
									(result, currentArray) => result.concat(currentArray),
									[]
							  )
					}
					style={{ width: '25%' }}
				/>

				<SearchButton text='חיפוש' type='submit' style={{ width: '12%' }} />

				<SearchButton
					text='חיפוש מתקדם'
					type='button'
					icon='carbon:search-advanced'
					onPress={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
					style={{ width: '25%' }}
				/>
			</form>

			{isAdvancedSearchOpen && (
				<>
					<div
						className='overlay'
						onClick={() => setIsAdvancedSearchOpen(false)}
					></div>

					<div className='advanced-search-window'>
						<div className='advanced-search-window-top-section'>
							<button
								className='close-button'
								onClick={() => setIsAdvancedSearchOpen(false)}
							>
								<Icon
									className='selected-car-close-icon'
									icon='material-symbols:close'
								></Icon>
							</button>

							<h3 className='secondary-title padding' style={{ margin: '0' }}>
								חיפוש מתקדם
							</h3>
							<button className='reset-button' onClick={resetForm}>
								ניקוי הכל
							</button>
						</div>

						<div className='advanced-search-window-form-container'>
							<form
								className='advanced-search-form'
								onSubmit={searchByAllParameters}
							>
								<div className='inner-form-wrapper'>
									<span className='mini-title'>יצרן</span>
									<ExpandingInput
										isExpanded={showManufacturerList}
										setIsExpanded={setShowManufacturerList}
										value={manufacturer}
										setValue={setManufacturer}
										placeHolder='בחר'
										listToRender={Object.keys(CarModels)}
										style={{ width: '75%' }}
									/>
								</div>

								<div className='inner-form-wrapper'>
									<span className='mini-title'>מודל</span>
									<ExpandingInput
										isExpanded={showModelList}
										setIsExpanded={setShowModelList}
										value={model}
										setValue={setModel}
										placeHolder='בחר'
										listToRender={
											manufacturer !== ''
												? CarModels[manufacturer]
												: Object.values(CarModels).reduce(
														(result, currentArray) =>
															result.concat(currentArray),
														[]
												  )
										}
										style={{ width: '75%' }}
									/>
								</div>

								<div className='inner-form-wrapper'>
									<span className='mini-title'>שנה</span>
									<RangeBasedSearch
										lowerBound={yearLowerBound}
										setLowerBound={setYearLowerBound}
										lowerBoundText='משנה'
										upperBound={yearUpperBound}
										setUpperBound={setYearUpperBound}
										upperBoundText='עד שנה'
										minValue={1994}
										maxValue={2024}
										range={yearRange}
										setRange={setYearRange}
										step={1}
									></RangeBasedSearch>
								</div>

								<div className='inner-form-wrapper'>
									<span className='mini-title'>מחיר</span>
									<RangeBasedSearch
										lowerBound={priceLowerBound}
										setLowerBound={setPriceLowerBound}
										lowerBoundText='מחיר מינימלי'
										upperBound={priceUpperBound}
										setUpperBound={setPriceUpperBound}
										upperBoundText='מחיר מקסימלי'
										minValue={0}
										maxValue={250000}
										range={priceRange}
										setRange={setPriceRange}
										step={1000}
										type='price'
									></RangeBasedSearch>
								</div>

								<SearchButton
									type='submit'
									text='חיפוש'
									style={{ margin: '16px', padding: '16px' }}
								/>
							</form>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default SearchBar;
