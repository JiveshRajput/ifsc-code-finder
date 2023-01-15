import connectDb from "../../utils/connectDB";
import Bank from "../../models/bankModel";
import NodeCache from "node-cache";
import { filterOutAllStates } from "../../utils/commanUtils";
const myCache = new NodeCache();
import catchApiErrors from "../../utils/catchApiErrors";
import AbstractApplicationError from "../../utils/AbstractApplicationError";

const findStatesFromBank = catchApiErrors(async (req, res) => {
	await connectDb();
	const query = {
		BANK: req.body.BANK,
	};
	const bname = req.body.BANK;

	const value = myCache.get(req.body.BANK);
	if (value == undefined) {
		console.log("miss for : " + req.body.BANK);
		const bank = await Bank.find(query).select({ STATE: 1, _id: 0 });
		if (bank.length === 0)
			return res.status(400).json({
				status: "Error : Invalid Bank Name",
			});
		const states = await filterOutAllStates(bank);
		myCache.set(req.body.BANK, states.sort());
		res.status(200).json({
			status: "success",
			result: states.length,
			data: states.sort(),
			requestBody: query,
		});
	} else {
		console.log("hit for : " + bname);
		const value = myCache.get(bname);
		res.status(200).json({
			status: "success",
			result: value.length,
			data: value,
			requestBody: query,
		});
	}
});

export default findStatesFromBank;
