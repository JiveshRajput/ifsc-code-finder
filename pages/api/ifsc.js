import connectDb from "../../utils/connectDB";
import Bank from "../../models/bankModel";
import AbstractApplicationError from "../../utils/AbstractApplicationError";
import catchApiErrors from "../../utils/catchApiErrors";

const findByIfsc = catchApiErrors(async (req, res) => {
	await connectDb();
	const query = {
		IFSC: req.body.IFSC,
	};
	const bank = await Bank.findOne(query);
	if (!bank)
		return AbstractApplicationError("IFSC Code is not Valid.", 400, res);
	res.status(200).json({
		status: "success",
		data: bank,
		requestBody: query,
	});
});

export default findByIfsc;
