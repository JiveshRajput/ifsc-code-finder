import connectDb from "../../utils/connectDB";
import Bank from "../../models/bankModel";
import catchApiErrors from "../../utils/catchApiErrors";
import AbstractApplicationError from "../../utils/AbstractApplicationError";

const findBankfromBranchName = catchApiErrors(async (req, res) => {
	await connectDb();
	const query = {
		BANK: req.body.BANK,
		STATE: req.body.STATE,
		CITY: req.body.CITY,
		BRANCH: req.body.BRANCH,
	};

	const bank = await Bank.find(query);
	if (bank.length === 0)
		return AbstractApplicationError("Bank Name is not Valid", 400, res);

	res.status(200).json({
		status: "success",
		result: bank.length,
		data: bank[0],
		requestBody: query,
	});
});

export default findBankfromBranchName;
