import connectDb from "../../utils/connectDB";
import Bank from "../../models/bankModel";
import { filterOutCities } from "../../utils/commanUtils";
import catchApiErrors from "../../utils/catchApiErrors";
import AbstractApplicationError from "../../utils/AbstractApplicationError";

const findCityFromState = catchApiErrors(async (req, res) => {
	await connectDb();
	const query = {
		BANK: req.body.BANK,
		STATE: req.body.STATE,
	};
	const bank = await Bank.find(query).select({ CITY: 1, _id: 0 });
	if (bank.length === 0)
		return AbstractApplicationError("City Not Found !", 400, res);
	const cities = await filterOutCities(bank);
	res.status(200).json({
		status: "success",
		result: cities.length,
		data: cities.sort(),
		requestBody: query,
	});
});

export default findCityFromState;
