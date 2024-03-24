import React, { useState } from 'react';
import './AddCar.css';
import FileUploader from '../../../components/FileUploader/FileUploader';
import SearchButton from '../../../components/SearchButton/SearchButton';
import { useAuth } from '../../../hooks/useAuth';
import CarService from '../../../services/CarService';

interface AddCarProps {
	refreshMainListOnly: () => void;
	refreshBothListsOnUpload: () => void;
}

const AddCar: React.FC<AddCarProps> = ({
	refreshMainListOnly,
	refreshBothListsOnUpload,
}) => {
	const { user } = useAuth();

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
	const [bodyStyle, setType] = useState('');
	const [toggleButtonText, setToggleButtonText] =
		useState('לחץ כדי להוסיף רכב');
	const [formVisible, setFormVisible] = useState<boolean>(false);
	const toggleFormVisibility = (visibility: boolean) => {
		setFormVisible(visibility);
		setToggleButtonText(
			visibility ? 'סגור טופס הוספת רכב' : 'לחץ כדי להוסיף רכב'
		);
	};

	const clearFormAndFiles = () => {
		setTitle('');
		setManufacturer('');
		setModel('');
		setYear('');
		setColor('');
		setKilometers('');
		setPreviousOwners('');
		setIsFrontPage(false);
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
		formData.append('body', bodyStyle);
		formData.append('isFrontPage', String(isFrontPage));
		formData.append('price', price);
		selectedFiles.forEach((file) => {
			formData.append(`images`, file);
		});

		try {
			await CarService.addCar(formData, user);

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
				<form
					className='hidden-form bradius'
					onSubmit={(event) => handleUpload(event)}
				>
					<h3
						className='mini-title'
						style={{ padding: '0', margin: '0', textAlign: 'center' }}
					>
						טופס הוספת רכב
					</h3>
					<input
						className='form-input'
						placeholder='כותרת'
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder='יצרן'
						type='text'
						value={manufacturer}
						onChange={(e) => setManufacturer(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder='מודל'
						type='text'
						value={model}
						onChange={(e) => setModel(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder='שנה'
						type='text'
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder='צבע'
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder="קילומטראז'"
						type='text'
						value={kilometers}
						onChange={(e) => setKilometers(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder='יד'
						type='text'
						value={previousOwners}
						onChange={(e) => setPreviousOwners(e.target.value)}
					/>

					<input
						className='form-input'
						placeholder='סוג רכב'
						type='text'
						list='types'
						onChange={handleTypeChoice}
					></input>
					<datalist id='types'>
						<option value='חשמלי'>חשמלי</option>
						<option value='היברידי'>היברידי</option>
						<option value='יוקרה'>יוקרה</option>
						<option value='ספורט'>ספורט</option>
						<option value="גי'פ">גי'פ</option>
						<option value='מסחרי'>מסחרי</option>
					</datalist>

					<input
						className='form-input'
						placeholder='מחיר'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<div className='form-input'>
						להוסיף לתצוגה בעמוד הבית?
						<input
							id='frontPageInput'
							type='checkbox'
							checked={isFrontPage}
							onChange={() => setIsFrontPage(!isFrontPage)}
						></input>
					</div>

					<FileUploader
						selectedFiles={selectedFiles}
						setSelectedFiles={setSelectedFiles}
					></FileUploader>

					<SearchButton type='submit' icon='mdi:arrow-upload' text='העלאה' />
				</form>
			)}
		</div>
	);
};

export default AddCar;
