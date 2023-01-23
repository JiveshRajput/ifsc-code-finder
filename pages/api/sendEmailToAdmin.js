import nodemailer from "nodemailer";
import catchApiErrors from "../../utils/catchApiErrors";

const sendEmailtoAdmin = catchApiErrors(async (req, res) => {
	const query = {
		Name: req.body.Name,
		Email: req.body.Email,
		Message: req.body.Message,
	};
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.HOST_EMAIL,
			pass: process.env.HOST_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: `${query.Email}`,
		to: process.env.ADMIN_EMAIL,
		subject: `${query.Message}`,
		text: `Message came from IFSC Code Finder:-
			   User Name  : ${query.Name}
               User Email : ${query.Email}
               User Message : ${query.Message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		console.log("Email Sent :" + JSON.stringify(info));
		res.status(200).json({
			status: "Mail Send Successfully",
			requestBody: query,
		});
	});
});
export default sendEmailtoAdmin;