// class AbstractApplicationError extends Error {
// 	constructor(message, statusCode) {
// 		super(message);
// 		this.statusCode = statusCode;
// 		this.status = `${statusCode}`.startsWith("4")
// 			? "Failure"
// 			: "Internal Server Error";
// 		this.beingHandled = true;
// 		console.log(this.statusCode, message);

// 	}
// }

// export default AbstractApplicationError;

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
