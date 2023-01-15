const catchApiErrors = (fn) => async (req, res) => {
	try {
		await fn(req, res);
	} catch (error) {
		res.status(500).json({
			status: "Internal Server Error",
		});
	}
};

export default catchApiErrors;
