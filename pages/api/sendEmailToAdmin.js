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
			user: "nomanfortesting@gmail.com",
			pass: "gurcpgonoliiczad",
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: `${query.Email}`,
		to: "tm8683248@gmail.com",
		subject: `${query.Message}`,
		text: `Message came from IFSC Code Finder:-
			   User Name  : ${query.Name}
               User Email : ${query.Email}
               User Message : ${query.Message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		console.log("Email Sent :" + info);
		res.status(200).json({
			status: "Mail Send Successfully",
			requestBody: query,
		});
	});
});
export default sendEmailtoAdmin;