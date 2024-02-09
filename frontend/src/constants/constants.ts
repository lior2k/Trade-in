export type CarData = {
	title: string;
	color: string;
	year: number;
	km: number;
	previousOwners: number;
	price: number;
	images: string[];
	isFrontPage?: boolean;
	id?: string; //index for lists
	_id: string; //mongo id
};

export const BACKEND_BASE_URL = 'http://localhost:8803';
export const BACKEND_API_URL = 'http://localhost:8803/api/cars';

export const CarModels: Record<string, string[]> = {
	Hyundai: ['Elantra', 'Tucson', 'Sonata', 'i10', 'i20'],
	Suzuki: ['Swift', 'Vitara', 'Jimny'],
	Kia: ['Picanto', 'Sorento', 'Soul', 'Kadenza', 'Stinger'],
	Seat: ['Leon', 'Ibiza', 'Arona', 'Mii'],
};
