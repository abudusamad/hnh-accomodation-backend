import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("connecteyo mongoose!");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("connected", () => {
	console.log("mongoDB is connected");
});

mongoose.connection.on("disconnected", () => {
	console.log("mongoDB is disconnected! ");
});

app.get("/", (req, res) => {
	res.send("The first websitet of mine")
})
app.listen(6000, () => {
	console.log("connected to backend");
});
