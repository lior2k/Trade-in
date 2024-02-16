import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import './DualThumbSlider.css';

interface DualThumbSliderProps {
	min: number;
	max: number;
	values: number[];
	onChange: (newValues: number[]) => void;
	step: number;
	type?: 'price';
}

const DualThumbSlider: React.FC<DualThumbSliderProps> = ({
	min,
	max,
	values,
	onChange,
	step,
	type,
}) => (
	<div className='dual-thumb-slider-container'>
		<label>{min}</label>
		<Range
			values={values}
			step={step}
			min={min}
			max={max}
			onChange={(newValues) => onChange(newValues)}
			renderTrack={({ props, children }) => (
				<div
					{...props}
					className='track' // Apply the track class
					style={{
						...props.style,
						background: getTrackBackground({
							values,
							colors: ['#ccc', '#548BF4', '#ccc'],
							min,
							max,
						}),
					}}
				>
					{children}
				</div>
			)}
			renderThumb={({ props, isDragged }) => (
				<div
					{...props}
					className='thumb' // Apply the thumb class
					style={{ ...props.style }}
				/>
			)}
		/>
		<label>
			{max}
			{type ? '₪' : ''}
		</label>
	</div>
);

export default DualThumbSlider;
