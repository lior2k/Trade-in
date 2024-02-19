import { useState } from 'react';
import './SearchBar.css';
import SearchButton from '../SearchButton/SearchButton';
import { Icon } from '@iconify/react';
import CarService from '../../services/CarService';
import { CarModels } from '../../constants/constants';

const SearchBar = () => {
	const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] =
		useState<boolean>(false);

	const [showManufacturerList, setShowManufacturerList] =
		useState<boolean>(false);
	const [showModelList, setShowModelList] = useState<boolean>(false);
	const [manufacturer, setManufacturer] = useState<string>('');
	const [model, setModel] = useState<string>('');

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
			// setcars(cars)
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<div className='search-bar-outer-container'>
			<form className='form-flex-row' onSubmit={handleFormSubmit}>
				<div
					className='form-input-container'
					onClick={() => {
						setShowManufacturerList(!showManufacturerList);
					}}
				>
					<span>{manufacturer === '' ? 'יצרן' : manufacturer}</span>
					<div
						className={`expanding ${showManufacturerList ? 'expanded' : ''}`}
					>
						<ul className='expanded-list'>
							{Object.keys(CarModels).map((key) => (
								<li
									className='expanded-list-item'
									key={key}
									value={key}
									onClick={() => setManufacturer(key)}
								>
									{key}
								</li>
							))}
						</ul>
					</div>
					{showManufacturerList ? (
						<Icon className='arrow-down-icon' icon='ep:arrow-up' />
					) : (
						<Icon className='arrow-down-icon' icon='ep:arrow-down' />
					)}
				</div>

				<div
					className='form-input-container'
					onClick={() => {
						setShowModelList(!showModelList);
					}}
				>
					<span>{model === '' ? 'מודל' : model}</span>
					<div className={`expanding ${showModelList ? 'expanded' : ''}`}>
						<ul className='expanded-list'>
							{CarModels[manufacturer]
								? CarModels[manufacturer].map((value, index) => (
										<li
											className='expanded-list-item'
											key={index}
											value={value}
											onClick={() => setModel(value)}
										>
											{value}
										</li>
								  ))
								: Object.keys(CarModels).map((manufacturerKey) =>
										CarModels[manufacturerKey].map((value, index) => (
											<li
												className='expanded-list-item'
												key={index}
												value={value}
												onClick={() => setModel(value)}
											>
												{value}
											</li>
										))
								  )}
						</ul>
					</div>
					{showModelList ? (
						<Icon className='arrow-down-icon' icon='ep:arrow-up' />
					) : (
						<Icon className='arrow-down-icon' icon='ep:arrow-down' />
					)}
				</div>

				<button className='search-bar-button' type='submit'>
					<span>חיפוש</span>
					<Icon className='search-icon' icon='material-symbols:search'></Icon>
				</button>

				<button
					className='search-bar-button'
					type='button'
					onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
				>
					<span>חיפוש מתקדם</span>
					<Icon className='search-icon' icon='carbon:search-advanced'></Icon>
				</button>
			</form>

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
							{/* <BasicSearch direction='column' />

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
							<BodyBasedSearch /> */}

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
