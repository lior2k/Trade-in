export const HTTP_RESPONSE_CODE = {
	NOT_FOUND: 404,
	CREATED: 201,
	CONFLICT: 409,
	BAD_REQUEST: 400,
	SUCCESS: 200,
	UNAUTHORIZED: 401,
	SERVER_ERROR: 500,
};

export const enum HttpStatusCode {
	NOT_FOUND = 404,
	CREATED = 201,
	CONFLICT = 409,
	BAD_REQUEST = 400,
	SUCCESS = 200,
	UNAUTHORIZED = 401,
}

export const APP_ERROR_MESSAGE = {
	serverError: 'Something went wrong, try again later',
	userAuthenticated: 'User Authenticated successfully',
	carReturned: 'Car Returned successfully',
	carsReturned: 'Cars Returned successfully',
	carDoesntExist: 'Car does not exist',
	invalidCredentials: 'Invalid username or password',
};
