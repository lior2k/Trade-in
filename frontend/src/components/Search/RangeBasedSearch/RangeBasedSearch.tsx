import React, { useState } from 'react';
import './RangeBasedSearch.css';
import DualThumbSlider from './DualThumbSlider/DualThumbSlider';
import CarService from '../../../services/CarService';
import { useNavigate } from 'react-router-dom';

interface RangeBasedSearchProps {
	minValue: number;
	maxValue: number;
	initialValueLow: number;
	initialValueHigh: number;
	step: number;
	type?: 'price';
}

const RangeBasedSearch: React.FC<RangeBasedSearchProps> = ({
	minValue,
	maxValue,
	initialValueLow,
	initialValueHigh,
	step,
	type,
}) => {
	const navigate = useNavigate();
	const [lowerBound, setLowerBound] = useState<number>(initialValueLow);
	const [upperBound, setUpperBound] = useState<number>(initialValueHigh);

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
		if (numericValue > maxValue || numericValue < minValue) {
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
		if (numericValue > maxValue || numericValue < minValue) {
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

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const cars = await CarService.getCarsByBudget(lowerBound, upperBound);
			navigate('/search', { state: { cars } });
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<>
			<form className='basic-search-form' onSubmit={handleFormSubmit}>
				<div className='range-inputs'>
					<div className='input-container'>
						<input
							className='range'
							type='number'
							id='lowerBound'
							value={lowerBound}
							onChange={handleLowerBoundChange}
						></input>
						<label>Minimum</label>
					</div>

					<div className='input-container'>
						<input
							className='range'
							type='number'
							id='upperBound'
							value={upperBound}
							onChange={handleUpperBoundChange}
						></input>
						<label>Maximum</label>
					</div>
				</div>
				<DualThumbSlider
					min={minValue}
					max={maxValue}
					values={priceRange}
					onChange={handleRangeChange}
					step={step}
					type={type}
				></DualThumbSlider>
				<button type='submit' className='form-submit'>
					Search
				</button>
			</form>
		</>
	);
};

export default RangeBasedSearch;
