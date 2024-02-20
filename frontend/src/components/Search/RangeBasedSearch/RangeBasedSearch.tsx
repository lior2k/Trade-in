import React from 'react';
import './RangeBasedSearch.css';
import DualThumbSlider from './DualThumbSlider/DualThumbSlider';

interface RangeBasedSearchProps {
	lowerBound: number;
	setLowerBound: React.Dispatch<React.SetStateAction<number>>;
	lowerBoundText: string;
	upperBound: number;
	setUpperBound: React.Dispatch<React.SetStateAction<number>>;
	upperBoundText: string;
	minValue: number;
	maxValue: number;
	range: number[];
	setRange: React.Dispatch<React.SetStateAction<number[]>>;
	step: number;
	type?: 'price';
}

const RangeBasedSearch: React.FC<RangeBasedSearchProps> = ({
	lowerBound,
	setLowerBound,
	lowerBoundText,
	upperBound,
	setUpperBound,
	upperBoundText,
	minValue,
	maxValue,
	range,
	setRange,
	step,
	type,
}) => {
	const handleRangeChange = (priceRange: number[]) => {
		setRange(priceRange);
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
			setRange((prevPriceRange: number[]) => [numericValue, prevPriceRange[1]]);
		} else {
			setRange([numericValue, numericValue]);
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
			setRange((prevPriceRange: number[]) => [prevPriceRange[0], numericValue]);
		} else {
			setRange([numericValue, numericValue]);
			setLowerBound(numericValue);
			setUpperBound(numericValue);
		}
	};

	return (
		<div className='range-wrapper'>
			<div className='range-inputs'>
				<div className='input-container'>
					<input
						className='range'
						type='number'
						id='lowerBound'
						value={lowerBound}
						onChange={handleLowerBoundChange}
					></input>
					<label>{lowerBoundText}</label>
				</div>

				<div className='input-container'>
					<input
						className='range'
						type='number'
						id='upperBound'
						value={upperBound}
						onChange={handleUpperBoundChange}
					></input>
					<label>{upperBoundText}</label>
				</div>
			</div>

			<DualThumbSlider
				min={minValue}
				max={maxValue}
				values={range}
				onChange={handleRangeChange}
				step={step}
				type={type}
			></DualThumbSlider>
		</div>
	);
};

export default RangeBasedSearch;
