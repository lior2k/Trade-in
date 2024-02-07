const router = require('express').Router();
const Car = require('../models/Car');

/*
Create one car
-- Examples --
	Url: http://localhost:8803/api/cars/add
	Body (Json):
		{
    		"title": "hyundai i10",
    		"color": "white",
    		"year": 2018,
    		"km": 60000,
    		"previous_owners": 2,
    		"price": 60000
		}
*/
router.post('/add', async (req, res) => {
	// todo - verify sender ...
	const newCar = new Car(req.body);
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

module.exports = router;