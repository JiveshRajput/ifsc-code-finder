import mongoose from "mongoose";
mongoose.set("strictQuery", true);

async function connectDb() {
	const dbConnection = process.env.DATABASE_CONNECTION_STRING.replace(
		"<password>",
		process.env.PASSWORD
	);
	try {
		await mongoose.connect(dbConnection);
		console.log("Connection Established...");
	} catch (error) {
		console.log(error);
	}
}

export default connectDb;
