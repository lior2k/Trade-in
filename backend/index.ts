const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = require('./src/config/corsOptions');

const { logger } = require('./src/middlewares/logEvents');
import errorHandler from './src/middlewares/errorHandler';

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const carsRoute = require('./src/routes/cars');

app.use(logger);
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/cars', carsRoute);
app.use(errorHandler);

// anything that made it here gets a 404 error
// app.all('*', (req, res) => {
// 	res.status(404).json({ error: '404 Not Found' });
// });

const PORT = process.env.PORT || 8803;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
	console.log('MongoDB connected successfully');
});
