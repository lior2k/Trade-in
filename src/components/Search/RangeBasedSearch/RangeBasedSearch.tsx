import React, { useState } from 'react';
import './RangeBasedSearch.css';
import DualThumbSlider from './DualThumbSlider/DualThumbSlider';

interface RangeBasedSearchProps {
	minValue: number;
	maxValue: number;
	lowerBound: number;
	setLowerBound: (bound: number) => void;
	upperBound: number;
	setUpperBound: (bound: number) => void;
}

const RangeBasedSearch: React.FC<RangeBasedSearchProps> = ({
	minValue,
	maxValue,
	lowerBound,
	setLowerBound,
	upperBound,
	setUpperBound,
}) => {
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
	return (
		<>
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
			></DualThumbSlider>
		</>
	);
};

export default RangeBasedSearch;
