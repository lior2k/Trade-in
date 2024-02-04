export type CarData = {
	title: string;
	color: string;
	year: number;
	km: number;
	previous_owners: number;
	price: number;
	image: string;
};

export const car: CarData = {
	title: 'Hyundai I10',
	color: 'White',
	year: 2022,
	km: 40000,
	previous_owners: 1,
	price: 120000,

	image: '../../images/hyundai.jpg',
};

export const another_car: CarData = {
	title: 'Seat Ibiza IV',
	color: 'Blue',
	year: 2013,
	km: 600000,
	previous_owners: 4,
	price: 40000,

	image: '../../images/ibiza.jpg',
};
