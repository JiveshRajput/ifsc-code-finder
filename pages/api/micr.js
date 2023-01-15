import AbstractApplicationError from "../../utils/AbstractApplicationError";
import catchApiErrors from "../../utils/catchApiErrors";
import connectDb from "../../utils/connectDB";
import Bank from "../../models/bankModel";

const findByMICR = catchApiErrors(async (req, res) => {
	await connectDb();
	const query = {
		MICR: req.body.MICR,
	};
	const bank = await Bank.findOne(query);
	if (!bank)
		return AbstractApplicationError("MICR Code is not Valid.", 400, res);
	res.status(200).json({
		status: "success",
		data: bank,
		requestBody: query,
	});
});

export default findByMICR;
