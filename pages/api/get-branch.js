import connectDb from "../../utils/connectDB";
import Bank from "../../models/bankModel";
import { filterOutBranch } from "../../utils/commanUtils";
import catchApiErrors from "../../utils/catchApiErrors";
import AbstractApplicationError from "../../utils/AbstractApplicationError";

const findBranchfromCitY = catchApiErrors(async (req, res) => {
	await connectDb();
	const query = {
		BANK: req.body.BANK,
		STATE: req.body.STATE,
		CITY: req.body.CITY,
	};

	const bank = await Bank.find(query).select({ BRANCH: 1, _id: 0 });
	if (bank.length === 0)
		return AbstractApplicationError("City Details not Found", 400, res);
	const branch = filterOutBranch(bank);
	res.status(200).json({
		status: "success",
		result: branch.length,
		data: branch.sort(),
		requestBody: query,
	});
});
export default findBranchfromCitY;
