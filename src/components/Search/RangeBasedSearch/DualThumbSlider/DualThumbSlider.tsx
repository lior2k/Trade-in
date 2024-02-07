import React from 'react';
import { Range, getTrackBackground } from 'react-range';

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
	<div
		style={{
			display: 'flex',
			flexDirection: 'row',
			flex: 1,
			alignItems: 'center',
			padding: '8px',
		}}
	>
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
					style={{
						...props.style,
						margin: '0px 16px',
						height: '6px',
						width: '100%',
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
					style={{
						...props.style,
						height: '24px',
						width: '24px',
						backgroundColor: '#FFF',
						border: '2px solid #548BF4',
						borderRadius: '50%',
						boxShadow: '0px 2px 6px #AAA',
					}}
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
