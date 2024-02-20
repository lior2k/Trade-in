const router = require('express').Router();
const Car = require('../models/Car');
const multer = require('multer');
const upload = multer({ dest: './public/images' });
/*
Create one car
-- Examples --
	Url: http://localhost:8803/api/cars/add
	Body (FormData):
		{
    		"title": "hyundai i10",
    		"color": "white",
    		"year": 2018,
    		"km": 60000,
    		"previous_owners": 2,
    		"price": 60000
		}
	Files: req.files = [file1, file2, ...]
*/
router.post('/add', upload.array('images', 10), async (req, res) => {
	const newCar = new Car({
		...req.body,
		isFrontPage: req.body.isFrontPage === 'true',
	});
	req.files.forEach((file) => newCar.images.push(file.filename));
	try {
		const savedCar = await newCar.save();
		res.status(201).json(savedCar);
	} catch (err) {
		console.log('ERROR DURING ADD NEW CAR');
		res.status(500).json(err);
	}
});

/*
Delete one car
-- Examples --
	Url: http://localhost:8803/api/cars/delete/65c3bb4e08e5ebdc52b4d115
*/
router.delete('/delete/:id', async (req, res) => {
	try {
		const car = await Car.findByIdAndDelete(req.params.id);
		res.status(200).json(car);
	} catch (err) {
		console.log('ERROR DURING DELETE CAR');
		res.status(500).json(err);
	}
});

/*
Update one car
-- Examples --
	Url: http://localhost:8803/api/cars/update/65c3bb4e08e5ebdc52b4d115
	Body (Json):
		{
    		"title": "hyundai i10",
    		"color": "white",
    		"year": 2018,
    		"km": 70000,
    		"previous_owners": 2,
    		"price": 60000
		}
*/
router.patch('/update/:id', async (req, res) => {
	try {
		const updatedCar = await Car.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json(updatedCar);
	} catch (err) {
		console.log('ERROR DURING UPDATE CAR');
		res.status(500).json(err);
	}
});

/*
The order of definition of the following methods is actually important,
If defined the other way around, using the /get/all method would result in
an error because the first match would be the /get/:id which would error out
because 'all' is not a valid id.

Get ALL cars
-- Examples --
	Url: http://localhost:8803/api/cars/get/all
*/
router.get('/get/all', async (req, res) => {
	try {
		const cars = await Car.find({});
		res.status(200).json(cars);
	} catch (err) {
		console.log('ERROR DURING GET ALL CARS');
		res.status(500).json(err);
	}
});

router.get('/get/frontpage', async (req, res) => {
	try {
		const cars = await Car.find({ isFrontPage: true });
		res.status(200).json(cars);
	} catch (err) {
		console.log('ERROR DURING GET ALL CARS');
		res.status(500).json(err);
	}
});

/*
Get one car
-- Examples --
	Url: http://localhost:8803/api/cars/get/65c3bb4e08e5ebdc52b4d115
*/
router.get('/get/:id', async (req, res) => {
	try {
		const car = await Car.findById(req.params.id);
		res.status(200).json(car);
	} catch (err) {
		console.log('ERROR DURING GET CAR');
		res.status(500).json(err);
	}
});

/*
Get by manufacturer & model
-- Examples --
	Url: http://localhost:8803/api/cars/search/seat/ibiza
*/
router.get('/search/:manufacturer/:model', async (req, res) => {
	try {
		const { manufacturer, model } = req.params;

		// Construct the conditions based on the parameters
		const conditions = {};
		if (manufacturer !== 'manufacturer') {
			conditions.manufacturer = new RegExp(manufacturer, 'i');
		}

		if (model !== 'model') {
			conditions.model = new RegExp(model, 'i');
		}

		const cars = await Car.find(conditions);
		res.status(200).json(cars);
	} catch (err) {
		console.log('error at /search/:manufacturer/:model');
		res.status(500).json(err);
	}
});

/*
Get by body style only
-- Examples --
	Url: http://localhost:8803/api/cars/search/body?styles=electric&hybrid&...&sedan
*/
router.get('/search/body', async (req, res) => {
	try {
		const selectedStyles = req.query.styles; // This will be an array of selected styles
		// Validate if 'styles' query parameter is present
		if (!selectedStyles || !Array.isArray(selectedStyles)) {
			return res
				.status(400)
				.json({ error: 'Invalid or missing body styles parameter' });
		}

		const matchingCars = await Car.find({
			bodyStyles: { $in: selectedStyles },
		});

		res.json(matchingCars);
	} catch (error) {
		console.error('Error fetching cars by body style:', error);
		res.status(500);
	}
});

/*
Get by budget only
-- Examples --
	Url: http://localhost:8803/api/cars/search/budget/20000/40000
*/
router.get('/search/budget/:lowerBound/:upperBound', async (req, res) => {
	try {
		const { lowerBound, upperBound } = req.params;
		// Validate that lowerBound and upperBound are valid numbers
		if (isNaN(lowerBound) || isNaN(upperBound)) {
			return res
				.status(400)
				.json({ error: 'Invalid lower or upper bound values' });
		}

		const cars = await Car.find({
			price: { $gte: parseInt(lowerBound), $lte: parseInt(upperBound) },
		});

		res.json(cars);
	} catch (error) {
		console.error('Error fetching cars by budget:', error);
		res.status(500);
	}
});

/*
Get by budget only
-- Examples --
	Url: http://localhost:8803/api/cars/search/advanced
*/
router.get('/search/advanced', async (req, res) => {
	try {
		const {
			manufacturer,
			model,
			yearLowerBound,
			yearUpperBound,
			priceLowerBound,
			priceUpperBound,
		} = req.query;

		// Validate parameters as needed
		// ...

		const query = {};

		if (manufacturer !== '') {
			query.manufacturer = manufacturer;
		}

		if (model !== '') {
			query.model = model;
		}

		if (yearLowerBound && yearUpperBound) {
			query.year = {
				$gte: parseInt(yearLowerBound),
				$lte: parseInt(yearUpperBound),
			};
		}

		if (priceLowerBound && priceUpperBound) {
			query.price = {
				$gte: parseInt(priceLowerBound),
				$lte: parseInt(priceUpperBound),
			};
		}

		const cars = await Car.find(query);

		res.json(cars);
	} catch (error) {
		console.error('Error fetching cars by advanced parameters:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;
