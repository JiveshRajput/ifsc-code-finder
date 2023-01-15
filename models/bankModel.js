import { Schema, model, models } from "mongoose";

const bankSchema = new Schema({
	BANK: { type: String },
	IFSC: { type: String },
	BRANCH: { type: String },
	CENTRE: { type: String },
	DISTRICT: { type: String },
	STATE: { type: String },
	ADDRESS: { type: String },
	CONTACT: { type: Number },
	IMPS: { type: Boolean },
	RTGS: { type: Boolean },
	CITY: { type: String },
	ISO3166: { type: String },
	NEFT: { type: Boolean },
	MICR: { type: String },
	UPI: { type: Boolean },
	META_TITLE: { type: String },
	DESCRIPTION_TITLE: { type: String },
	DESCRIPTION_BOX: { type: String },
	KEYWORDS: { type: String },
});

const Bank = models.banks || model("banks", bankSchema);

export default Bank;
