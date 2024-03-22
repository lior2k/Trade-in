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

export const CarModels: Record<string, string[]> = {
	יונדאי: ['אלנטרה', 'טוסון', 'סונטה', 'i10', 'i20'],
	סוזוקי: ['סוויפט', 'ויטרה', "ג'מני"],
	קיה: ['פיקנטו', 'סורנטו', 'סול', 'קדנזה', 'סטינגר'],
	סיאט2: ['לאון', 'איביזה', 'ארונה', 'מיי'],
	סיאט3: ['לאון', 'איביזה', 'ארונה', 'מיי'],
	סיאט4: ['לאון', 'איביזה', 'ארונה', 'מיי'],
	סיאט5: ['לאון', 'איביזה', 'ארונה', 'מיי'],
	סיאט6: ['לאון', 'איביזה', 'ארונה', 'מיי'],
	סיאט7: ['לאון', 'איביזה', 'ארונה', 'מיי'],
};
