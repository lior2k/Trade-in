const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: './public/images' });
const carsController = require('../controllers/carsController');

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
router.post('/add', upload.array('images', 10), carsController.addCar);

/*
Delete one car
-- Examples --
	Url: http://localhost:8803/api/cars/delete/65c3bb4e08e5ebdc52b4d115
*/
router.delete('/delete/:id', carsController.deleteCar);

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
router.patch('/update/:id', carsController.updateCar);

/*
The order of definition of the following methods is actually important,
If defined the other way around, using the /get/all method would result in
an error because the first match would be the /get/:id which would error out
because 'all' is not a valid id.

Get ALL cars
-- Examples --
	Url: http://localhost:8803/api/cars/get/all
*/
router.get('/get/all', carsController.getAllCars);

router.get('/get/frontpage', carsController.getFrontPageCars);

/*
Get one car
-- Examples --
	Url: http://localhost:8803/api/cars/get/65c3bb4e08e5ebdc52b4d115
*/
router.get('/get/:id', carsController.getCar);

/*
Get by manufacturer & model
-- Examples --
	Url: http://localhost:8803/api/cars/search/seat/ibiza
*/
router.get(
	'/search/:manufacturer/:model',
	carsController.getCarsByManufacturerAndModel
);

/*
Get by body style only
-- Examples --
	Url: http://localhost:8803/api/cars/search/body?styles=electric&hybrid&...&sedan
*/
router.get('/search/body', carsController.getCarsByBodyStyle);

/*
Get by budget only
-- Examples --
	Url: http://localhost:8803/api/cars/search/budget/20000/40000
*/
router.get(
	'/search/budget/:lowerBound/:upperBound',
	carsController.getCarsByBudget
);

/*
Get by budget only
-- Examples --
	Url: http://localhost:8803/api/cars/search/advanced
*/
router.get('/search/advanced', carsController.getCarsByAllParameters);

module.exports = router;
