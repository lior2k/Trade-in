import axios from 'axios';
import { CarData, User, BACKEND_CAR_API_URL } from '../constants/constants';

const CarService = {
	getCarById: async (carId: string): Promise<CarData> => {
		const response = await axios.get(`${BACKEND_CAR_API_URL}/get/${carId}`);
		return response.data;
	},

	getAllCars: async (): Promise<CarData[]> => {
		const response = await axios.get(`${BACKEND_CAR_API_URL}/get/all`);
		return response.data;
	},

	getFrontPageCars: async (): Promise<CarData[]> => {
		const response = await axios.get(`${BACKEND_CAR_API_URL}/get/frontpage`);
		return response.data;
	},

	getCarsByManufacturerAndModel: async (
		manufacturer: string,
		model: string
	): Promise<CarData[]> => {
		let url;
		if (manufacturer === '') {
			url = `${BACKEND_CAR_API_URL}/search/model/${model}`;
		} else if (model === '') {
			url = `${BACKEND_CAR_API_URL}/search/manufacturer/${manufacturer}`;
		} else {
			url = `${BACKEND_CAR_API_URL}/search/${manufacturer}/${model}`;
		}
		const response = await axios.get(url);
		return response.data;
	},

	getCarsByBodyStyle: async (selectedStyles: string[]): Promise<CarData[]> => {
		const queryParams = new URLSearchParams();
		queryParams.append('styles', selectedStyles.join(','));
		console.log(queryParams);
		const response = await axios.get(
			`${BACKEND_CAR_API_URL}/search/body?${queryParams}`
		);
		return response.data;
	},

	getCarsByBudget: async (
		lowerBound: number,
		upperBound: number
	): Promise<CarData[]> => {
		const response = await axios.get(
			`${BACKEND_CAR_API_URL}/search/budget/${lowerBound}/${upperBound}`
		);
		return response.data;
	},

	getCarsByParameters: async (
		manufacturer: string,
		model: string,
		yearLowerBound: number,
		yearUpperBound: number,
		priceLowerBound: number,
		priceUpperBound: number
	): Promise<CarData[]> => {
		const response = await axios.get(`${BACKEND_CAR_API_URL}/search/advanced`, {
			params: {
				manufacturer,
				model,
				yearLowerBound,
				yearUpperBound,
				priceLowerBound,
				priceUpperBound,
			},
		});
		return response.data;
	},

	addCar: async (formData: FormData, user: User | null) => {
		if (!user) {
			return;
		}
		const response = await axios.post(`${BACKEND_CAR_API_URL}/add`, formData, {
			headers: {
				Authorization: `Bearer ${user?.accessToken}`,
				'Content-Type': 'multipart/form-data',
			},
		});

		console.log('Upload success:', response.data);
		alert('Car Uploaded Successfully');
	},

	deleteCar: async (_id: string, user: User | null) => {
		if (!user) {
			return;
		}
		const response = await axios.delete(
			`${BACKEND_CAR_API_URL}/delete/${_id}`,
			{
				headers: {
					Authorization: `Bearer ${user?.accessToken}`,
				},
			}
		);
		console.log('Deleted Successfully:', response.data);
		alert('רכב נמחק בהצלחה');
	},

	getManufacturersAndModels: async (): Promise<Record<string, string[]>> => {
		const response = await axios.get(
			`${BACKEND_CAR_API_URL}/manufacturers-models`
		);
		console.log(response.data);
		return response.data;
	},
};

export default CarService;
