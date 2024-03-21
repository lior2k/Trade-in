import * as express from 'express';
import jwt from 'jsonwebtoken';
import { HTTP_RESPONSE_CODE } from '../constants/constants';

const authenticate = (
	req: any,
	res: express.Response,
	next: express.NextFunction
) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) {
		return res
			.status(HTTP_RESPONSE_CODE.UNAUTHORIZED)
			.json({ error: 'Not allowed - missing token' });
	}
	jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
		if (err) {
			console.log(err);
			return res
				.status(HTTP_RESPONSE_CODE.UNAUTHORIZED)
				.json({ error: 'Not allowed - wrong token' });
		}
		req.user = user;
		next();
	});
};

export default authenticate;
