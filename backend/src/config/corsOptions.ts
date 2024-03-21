const whitelist = ['https://www.yoursite.com', 'http://localhost:3000'];
const corsOptions = {
	origin: (
		origin: string | undefined,
		callback: (error: Error | null, allow?: boolean) => void
	) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Blocked by CORS'));
		}
	},
	optionsSuccessStatus: 200,
};

export default corsOptions;
