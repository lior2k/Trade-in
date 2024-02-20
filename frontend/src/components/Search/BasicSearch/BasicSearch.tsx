import './BasicSearch.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarModels } from '../../../constants/constants';
import CarService from '../../../services/CarService';
import ExpandingInput from '../../ExpandingInput/ExpandingInput';
import SearchButton from '../../SearchButton/SearchButton';

const BasicSearch = () => {
	const [showManufacturerList, setShowManufacturerList] =
		useState<boolean>(false);
	const [showModelList, setShowModelList] = useState<boolean>(false);
	const [manufacturer, setManufacturer] = useState<string>('');
	const [model, setModel] = useState<string>('');
	const navigate = useNavigate();

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
			navigate('/search', { state: { cars } });
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<>
			<form className='basic-search-form' onSubmit={handleFormSubmit}>
				<div className='form-input-outer-container'>
					<span className='padding'>יצרן</span>

					<ExpandingInput
						isExpanded={showManufacturerList}
						setIsExpanded={setShowManufacturerList}
						value={manufacturer}
						setValue={setManufacturer}
						placeHolder='יצרן'
						listToRender={Object.keys(CarModels)}
						style={{ width: '75%' }}
					/>
				</div>

				<div className='form-input-outer-container'>
					<span className='padding'>מודל</span>

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
						style={{ width: '75%' }}
					/>
				</div>

				<SearchButton style={{ margin: '16px', padding: '16px' }} />
			</form>
		</>
	);
};

export default BasicSearch;
