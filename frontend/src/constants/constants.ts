export type CarData = {
	title: string;
	manufacturer: string;
	model: string;
	color: string;
	year: number;
	km: number;
	previousOwners: number;
	price: number;
	images: string[];
	isFrontPage?: boolean;
	id?: string; //index for lists
	_id: string; //mongo id
	// to do add description
};

export interface User {
	id?: string;
	username?: string;
	password?: string;
	accessToken?: string;
}

export const BACKEND_BASE_URL = 'http://localhost:8803';
export const BACKEND_CAR_API_URL = 'http://localhost:8803/api/cars';
export const BACKEND_AUTH_API_URL = 'http://localhost:8803/api/users';

export const widthBreakPoints = {
	MOBILE: 767,
	TABLET: 1365,
	DESKTOP: 1920,
};

// this variable is set in the useeffect on launch.
export const CarModels: Record<string, string[]> = {};
export const setCarModels = (data: Record<string, string[]>) => {
	for (const manufacturer in data) {
		CarModels[manufacturer] = data[manufacturer];
	}
};
