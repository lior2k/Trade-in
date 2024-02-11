import React, { useState } from 'react';
import './AddCar.css';
import FileUploader from '../../../components/FileUploader/FileUploader';
import axios from 'axios';
import { BACKEND_API_URL } from '../../../constants/constants';

interface AddCarProps {
	refreshMainListOnly: () => void;
	refreshBothListsOnUpload: () => void;
}

const AddCar: React.FC<AddCarProps> = ({
	refreshMainListOnly,
	refreshBothListsOnUpload,
}) => {
	const [title, setTitle] = useState('');
	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');
	const [year, setYear] = useState('');
	const [color, setColor] = useState('');
	const [kilometers, setKilometers] = useState('');
	const [previousOwners, setPreviousOwners] = useState('');
	const [isFrontPage, setIsFrontPage] = useState(false);
	const [price, setPrice] = useState('');
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [type, setType] = useState('');
	const [toggleButtonText, setToggleButtonText] = useState('Click to Add Car');
	const [formVisible, setFormVisible] = useState<boolean>(false);
	const toggleFormVisibility = (visibility: boolean) => {
		setFormVisible(visibility);
		setToggleButtonText(visibility ? 'Close Form Window' : 'Click to Add Car');
	};

	const clearFormAndFiles = () => {
		setTitle('');
		setManufacturer('');
		setModel('');
		setYear('');
		setColor('');
		setKilometers('');
		setPreviousOwners('');
		// setIsFrontPage(false);
		setPrice('');
		setSelectedFiles([]);
	};

	const handleTypeChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
		setType(e.target.value);
	};

	const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent default form submission

		const formData = new FormData();
		formData.append('title', title);
		formData.append('manufacturer', manufacturer);
		formData.append('model', model);
		formData.append('year', year);
		formData.append('color', color);
		formData.append('km', kilometers);
		formData.append('previousOwners', previousOwners);
		formData.append('type', type);
		formData.append('isFrontPage', String(isFrontPage));
		formData.append('price', price);
		selectedFiles.forEach((file) => {
			formData.append(`images`, file);
		});

		try {
			// Adjust the API endpoint accordingly
			const response = await axios.post(`${BACKEND_API_URL}/add`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			console.log('Upload success:', response.data);
			alert('Car Uploaded Successfully');

			if (isFrontPage) {
				refreshBothListsOnUpload();
			} else {
				refreshMainListOnly();
			}

			// Reset form input values
			// clearFormAndFiles();
		} catch (error) {
			console.error('Upload error:', error);
			// Handle error
		}
	};

	return (
		<div className='add-car-container'>
			<button
				className='form-toggle-button'
				onClick={() => toggleFormVisibility(!formVisible)}
			>
				{toggleButtonText}
			</button>
			{formVisible && (
				<form className='hidden-form' onSubmit={(event) => handleUpload(event)}>
					{/* Your form content here */}
					<label>Title</label>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<label>Manufacturer</label>
					<input
						type='text'
						value={manufacturer}
						onChange={(e) => setManufacturer(e.target.value)}
					/>

					<label>Model</label>
					<input
						type='text'
						value={model}
						onChange={(e) => setModel(e.target.value)}
					/>

					<label>Year</label>
					<input
						type='text'
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>

					<label>Color</label>
					<input
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>

					<label>Kilometers</label>
					<input
						type='text'
						value={kilometers}
						onChange={(e) => setKilometers(e.target.value)}
					/>

					<label>Previous Owners</label>
					<input
						type='text'
						value={previousOwners}
						onChange={(e) => setPreviousOwners(e.target.value)}
					/>

					<label>Type</label>
					<input type='text' list='types' onChange={handleTypeChoice} />
					<datalist id='types'>
						<option value='Electric'>Electric</option>
						<option value='Hybrid'>Hybrid</option>
						<option value='Luxury'>Luxury</option>
						<option value='Sedan'>Sedan</option>
						<option value='Sports'>Sports</option>
						<option value='SUV'>SUV</option>
						<option value='Truck'>Truck</option>
						<option value='Van'>Van</option>
					</datalist>

					<label>Add to Front Page?</label>
					<input
						type='checkbox'
						checked={isFrontPage}
						onChange={() => setIsFrontPage(!isFrontPage)}
					/>

					<label>Price</label>
					<input value={price} onChange={(e) => setPrice(e.target.value)} />

					<FileUploader
						selectedFiles={selectedFiles}
						setSelectedFiles={setSelectedFiles}
					></FileUploader>

					<button className='form-submit' type='submit'>
						Upload
					</button>
				</form>
			)}
		</div>
	);
};

export default AddCar;
