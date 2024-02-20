import axios from 'axios';
import { CarData, BACKEND_API_URL } from '../constants/constants';

const CarService = {
	getCarById: async (carId: string): Promise<CarData> => {
		try {
			const response = await axios.get(`${BACKEND_API_URL}/get/${carId}`);
			return response.data;
		} catch (error) {
			console.error(`Error fetching car with ID ${carId}:`, error);
			throw error;
		}
	},

	getAllCars: async (): Promise<CarData[]> => {
		try {
			const response = await axios.get(`${BACKEND_API_URL}/get/all`);
			return response.data;
		} catch (error) {
			console.error('Error fetching cars:', error);
			throw error;
		}
	},

	getFrontPageCars: async (): Promise<CarData[]> => {
		try {
			const response = await axios.get(`${BACKEND_API_URL}/get/frontpage`);
			return response.data;
		} catch (error) {
			console.log('Error fetching all front page cars');
			throw error;
		}
	},

	getCarsByManufacturerAndModel: async (
		manufacturer: string,
		model: string
	): Promise<CarData[]> => {
		let url;
		if (manufacturer === '') {
			url = `${BACKEND_API_URL}/search/model/${model}`;
		} else if (model === '') {
			url = `${BACKEND_API_URL}/search/manufacturer/${manufacturer}`;
		} else {
			url = `${BACKEND_API_URL}/search/${manufacturer}/${model}`;
		}
		try {
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			console.log('Error fetching cars by manufacturer and model');
			throw error;
		}
	},

	getCarsByBodyStyle: async (selectedStyles: string[]): Promise<CarData[]> => {
		try {
			const queryParams = selectedStyles
				.map((style) => `styles=${style}`)
				.join('&');
			const response = await axios.get(
				`${BACKEND_API_URL}/search/body?${queryParams}`
			);
			return response.data;
		} catch (error) {
			console.log('Error fetching cars by body style');
			throw error;
		}
	},

	getCarsByBudget: async (
		lowerBound: number,
		upperBound: number
	): Promise<CarData[]> => {
		try {
			const response = await axios.get(
				`${BACKEND_API_URL}/search/budget/${lowerBound}/${upperBound}`
			);
			return response.data;
		} catch (error) {
			console.log('Error fetching cars by body style');
			throw error;
		}
	},

	getCarsByParameters: async (
		manufacturer: string,
		model: string,
		yearLowerBound: number,
		yearUpperBound: number,
		priceLowerBound: number,
		priceUpperBound: number
	): Promise<CarData[]> => {
		try {
			const response = await axios.get(`${BACKEND_API_URL}/search/advanced`, {
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
		} catch (error) {
			console.log('Error fetching cars by body style');
			throw error;
		}
	},
};

export default CarService;
