import express from 'express';
const app = express();

import cors from 'cors';
import corsOptions from './src/config/corsOptions';

const { logger } = require('./src/middlewares/logEvents');
import errorHandler from './src/middlewares/errorHandler';

import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import carsRoute from './src/routes/cars';
import usersRoute from './src/routes/users';

app.use(logger);
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/cars', carsRoute);
app.use('/api/users', usersRoute);
app.use(errorHandler);

// anything that made it here gets a 404 error
// app.all('*', (req, res) => {
// 	res.status(404).json({ error: '404 Not Found' });
// });

const PORT = process.env.PORT || 8803;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});

mongoose.connect(process.env.MONGO_URL as string).then(() => {
	console.log('MongoDB connected successfully');
});
