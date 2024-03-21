import * as express from 'express';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { APP_ERROR_MESSAGE, HTTP_RESPONSE_CODE } from '../constants/constants';
import { User, IUser } from '../models/User';
import { HttpException } from '../exceptions/exception';

const authenticateUser = async (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const { username, password: requestPassword } = req.body as IUser;
		const foundUser = await User.findOne({ username: username });
		if (!foundUser) {
			throw new HttpException(
				HTTP_RESPONSE_CODE.NOT_FOUND,
				APP_ERROR_MESSAGE.invalidCredentials
			);
		}
		const validatePassword = bcrypt.compare(
			requestPassword,
			foundUser.password
		);
		if (!validatePassword) {
			throw new HttpException(
				HTTP_RESPONSE_CODE.BAD_REQUEST,
				APP_ERROR_MESSAGE.invalidCredentials
			);
		}
		const accessToken = jwt.sign(
			{ id: foundUser._id, username: foundUser.username },
			process.env.JWT_SECRET,
			{
				expiresIn: process.env.JWT_EXPIRES_IN,
			}
		);
		const { password, ...response } = { ...foundUser.toJSON(), accessToken };
		return res.status(HTTP_RESPONSE_CODE.SUCCESS).json(response);
	} catch (error) {
		next(error);
	}
};

export default { authenticateUser };
