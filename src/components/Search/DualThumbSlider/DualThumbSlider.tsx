import React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface DualThumbSliderProps {
	min: number;
	max: number;
	values: number[];
	onChange: (newValues: number[]) => void;
}

const DualThumbSlider: React.FC<DualThumbSliderProps> = ({
	min,
	max,
	values,
	onChange,
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
		<label>0</label>
		<Range
			values={values}
			step={1000}
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
		<label>400,000</label>
	</div>
);

export default DualThumbSlider;
