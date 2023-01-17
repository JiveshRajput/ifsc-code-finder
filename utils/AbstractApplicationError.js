export default async function AbstractApplicationError(
	message,
	statusCode,
	res
) {
	res.status(statusCode).json({
		status: "Failure :",
		message: message,
	});
}
