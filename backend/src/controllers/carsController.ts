import * as express from 'express';
import { HTTP_RESPONSE_CODE } from '../constants/constants';
import Car from '../models/Car';

const addCar = async (
	req: any,
	res: express.Response,
	next: express.NextFunction
) => {
	const newCar = new Car({
		...req.body,
		isFrontPage: req.body.isFrontPage === 'true',
	});
	req.files?.forEach((file: { filename: string }) =>
		newCar.images.push(file.filename)
	);
	try {
		const savedCar = await newCar.save();
		res.status(HTTP_RESPONSE_CODE.CREATED).json(savedCar);
	} catch (error) {
		next(error);
	}
};

const deleteCar = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const car = await Car.findByIdAndDelete(req.params.id);
		res.status(HTTP_RESPONSE_CODE.SUCCESS).json(car);
	} catch (error) {
		next(error);
	}
};

const updateCar = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const updatedCar = await Car.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(HTTP_RESPONSE_CODE.SUCCESS).json(updatedCar);
	} catch (error) {
		next(error);
	}
};

const getAllCars = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const cars = await Car.find({});
		res.status(HTTP_RESPONSE_CODE.SUCCESS).json(cars);
	} catch (error) {
		next(error);
	}
};

const getCar = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const car = await Car.findById(req.params.id);
		res.status(HTTP_RESPONSE_CODE.SUCCESS).json(car);
	} catch (error) {
		next(error);
	}
};

const getFrontPageCars = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const cars = await Car.find({ isFrontPage: true });
		res.status(HTTP_RESPONSE_CODE.SUCCESS).json(cars);
	} catch (error) {
		next(error);
	}
};

const getCarsByManufacturerAndModel = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { manufacturer, model } = req.params;

		// Construct the conditions based on the parameters
		const conditions: { manufacturer?: RegExp; model?: RegExp } = {};
		if (manufacturer !== 'manufacturer') {
			conditions.manufacturer = new RegExp(manufacturer, 'i');
		}

		if (model !== 'model') {
			conditions.model = new RegExp(model, 'i');
		}

		const cars = await Car.find(conditions);
		res.status(HTTP_RESPONSE_CODE.SUCCESS).json(cars);
	} catch (error) {
		next(error);
	}
};

const getCarsByBodyStyle = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const selectedStyles = req.query.styles; // This will be an array of selected styles
		// Validate if 'styles' query parameter is present
		if (!selectedStyles || !Array.isArray(selectedStyles)) {
			return res
				.status(HTTP_RESPONSE_CODE.BAD_REQUEST)
				.json({ error: 'Invalid or missing body styles parameter' });
			// .send({ status, message, error: errors });
		}

		const matchingCars = await Car.find({
			bodyStyles: { $in: selectedStyles },
		});

		res.json(matchingCars);
	} catch (error) {
		next(error);
	}
};

const getCarsByBudget = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { lowerBound, upperBound } = req.params;
		// Validate that lowerBound and upperBound are valid numbers
		if (isNaN(parseInt(lowerBound)) || isNaN(parseInt(upperBound))) {
			return res
				.status(HTTP_RESPONSE_CODE.BAD_REQUEST)
				.json({ error: 'Invalid lower or upper bound values' });
			// or .send with {status, message, error} ?
		}

		const cars = await Car.find({
			price: { $gte: parseInt(lowerBound), $lte: parseInt(upperBound) },
		});

		res.json(cars);
	} catch (error) {
		next(error);
	}
};

const getCarsByAllParameters = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const {
			manufacturer,
			model,
			yearLowerBound,
			yearUpperBound,
			priceLowerBound,
			priceUpperBound,
		} = req.query;

		const query: {
			manufacturer?: string;
			model?: string;
			year?: { $gte: number; $lte: number };
			price?: { $gte: number; $lte: number };
		} = {};

		if (manufacturer !== '') {
			query.manufacturer = manufacturer as string;
		}

		if (model !== '') {
			query.model = model as string;
		}

		if (yearLowerBound && yearUpperBound) {
			query.year = {
				$gte: parseInt(yearLowerBound as string),
				$lte: parseInt(yearUpperBound as string),
			};
		}

		if (priceLowerBound && priceUpperBound) {
			query.price = {
				$gte: parseInt(priceLowerBound as string),
				$lte: parseInt(priceUpperBound as string),
			};
		}

		const cars = await Car.find(query);

		res.json(cars);
	} catch (error) {
		next(error);
	}
};

export default {
	addCar,
	deleteCar,
	updateCar,
	getAllCars,
	getCar,
	getFrontPageCars,
	getCarsByManufacturerAndModel,
	getCarsByBodyStyle,
	getCarsByBudget,
	getCarsByAllParameters,
};
