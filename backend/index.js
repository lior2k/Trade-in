const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// const dotenv = require("dotenv");
// dotenv.config();

// REST API crud operations
const carsRoute = require('./routes/cars');

// puts the specified middleware functions at the specified path
app.use(cors());
app.use(express.json());
app.use('/api/cars', carsRoute);

const PORT = 8803;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});

mongoose
	.connect(
		'mongodb+srv://lior2kx:kwjd5H7k8w3LDQYy@main.s2yxpjs.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('MongoDB connected successfully');
	});
