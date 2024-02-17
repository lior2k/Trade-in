import './BasicSearch.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarModels } from '../../../constants/constants';
import CarService from '../../../services/CarService';
import SearchButton from '../../SearchButton/SearchButton';
import { Icon } from '@iconify/react';

interface BasicSearchProps {
	direction: 'row' | 'column';
}

const BasicSearch: React.FC<BasicSearchProps> = ({ direction }) => {
	const style: React.CSSProperties = {
		flexDirection: direction,
	};

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
			<form
				className='basic-search-form'
				onSubmit={handleFormSubmit}
				style={style}
			>
				<div className='form-input-outer-container'>
					<span className='padding'>יצרן</span>

					<div
						className='form-input-inner-container'
						onClick={() => {
							setShowManufacturerList(!showManufacturerList);
						}}
					>
						<span>{manufacturer === '' ? 'בחר' : manufacturer}</span>
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
				</div>

				<div className='form-input-outer-container'>
					<span className='padding'>מודל</span>

					<div
						className='form-input-inner-container'
						onClick={() => {
							setShowModelList(!showModelList);
						}}
					>
						<span>{model === '' ? 'בחר' : model}</span>
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
				</div>

				<SearchButton
					text='חיפוש'
					type='submit'
					icon='material-symbols:search'
				/>
			</form>
		</>
	);
};

export default BasicSearch;
