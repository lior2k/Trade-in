const router = require('express').Router();
const OnSale = require('../models/OnSaleCars');

/*
Create one car
-- Examples --
	Url: http://localhost:8803/api/onsale/add
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
	const newOnSaleCar = new OnSale(req.body);
	try {
		const savedOnSaleCar = await newOnSaleCar.save();
		res.status(201).json(savedOnSaleCar);
	} catch (err) {
		console.log('ERROR DURING ADD NEW ON SALE CAR');
		res.status(500).json(err);
	}
});

module.exports = router;
