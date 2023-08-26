import mongoose, { Schema } from "mongoose";
const { Schema } = mongoose;

const HostelSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	address: {
		type: String,
		require: true,
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
	},

	descriptions: {
		type: String,
		require: true,
	},
	city: {
		type: String,
		require: true,
	},
	photos: {
		type: [String],
		require: true,
	},
	rooms: {
		type: [String],
	},
	location: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	features: {
		type: Boolean,
		default: false,
	},
});

export default mongoose.model("Hostel", HostelSchema);
