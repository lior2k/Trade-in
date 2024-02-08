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
