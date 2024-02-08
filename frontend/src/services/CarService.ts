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
};

export default CarService;
