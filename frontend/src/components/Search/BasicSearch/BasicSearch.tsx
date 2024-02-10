import './BasicSearch.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarModels } from '../../../constants/constants';
import CarService from '../../../services/CarService';

interface BasicSearchProps {
	direction: 'row' | 'column';
}

const BasicSearch: React.FC<BasicSearchProps> = ({ direction }) => {
	const style: React.CSSProperties = {
		flexDirection: direction,
	};

	const navigate = useNavigate();

	const [manufacturer, setManufacturer] = useState<string>('');
	const [model, setModel] = useState<string>('');

	const handleManufacturerChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setManufacturer(e.target.value);
	};

	const handleModelChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (manufacturer === '') {
			alert('Choose a Manufacturer');
			return;
		}
		setModel(e.target.value);
	};

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (manufacturer === '') {
			alert('Choose a Manufacturer');
			return;
		}
		try {
			const cars = await CarService.getCarsByManufacturerAndModel(
				manufacturer,
				model
			);
			navigate('/search', { state: { cars } });
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<>
			<form
				className='basic-search-form'
				onSubmit={handleFormSubmit}
				style={style}
			>
				<label className='form-label'>
					Manufacturer:
					<input
						type='text'
						name='manufacturer'
						list='manufacturers'
						className='form-input'
						onChange={handleManufacturerChoice}
					/>
					<datalist id='manufacturers'>
						{Object.keys(CarModels).map((key) => (
							<option key={key} value={key}>
								{key}
							</option>
						))}
					</datalist>
				</label>

				<label className='form-label'>
					Model:
					<input
						type='text'
						name='model'
						list='models'
						className='form-input'
						onChange={handleModelChoice}
					/>
					<datalist id='models'>
						{manufacturer &&
							CarModels[manufacturer] &&
							CarModels[manufacturer].map((value, index) => (
								<option key={index} value={value}>
									{value}
								</option>
							))}
					</datalist>
				</label>
				<button type='submit' className='form-submit'>
					Search
				</button>
			</form>
		</>
	);
};

export default BasicSearch;
