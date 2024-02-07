import React from 'react';
import './BasicSearch.css';

const BasicSearch = () => {
	return (
		<>
			<label className='form-label'>
				Manufacturer:
				<input
					type='text'
					name='manufacturer'
					list='manufacturers'
					className='form-input'
					onChange={() => {}}
				/>
				<datalist id='manufacturers'>
					<option value='Manufacturer 1' />
					<option value='Manufacturer 2' />
					<option value='Manufacturer 3' />
				</datalist>
			</label>

			<label className='form-label'>
				Model:
				<input
					type='text'
					name='model'
					list='models'
					className='form-input'
					onChange={() => {}}
				/>
				<datalist id='models'>
					<option value='Model 1' />
					<option value='Model 2' />
					<option value='Model 3' />
				</datalist>
			</label>
		</>
	);
};

export default BasicSearch;
