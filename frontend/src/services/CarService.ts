import axios from 'axios';
import { CarData } from '../constants/cardata';

const BASE_URL = 'http://localhost:8803/api/cars';

const CarService = {
	getAllCars: async (): Promise<CarData[]> => {
		try {
			const response = await axios.get(`${BASE_URL}/get/all`);
			return response.data;
		} catch (error) {
			console.error('Error fetching cars:', error);
			throw error;
		}
	},

	getCarById: async (carId: string): Promise<CarData> => {
		try {
			const response = await axios.get(`${BASE_URL}/get/${carId}`);
			return response.data;
		} catch (error) {
			console.error(`Error fetching car with ID ${carId}:`, error);
			throw error;
		}
	},

	// Add other methods as needed
};

export default CarService;
