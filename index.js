
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
dotenv.config()

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO)
		console.log("connecteyo mongoose!")
	} catch (error) {
		throw error;
	}
	
};

mongoose.connection.on("connected", () => {
	console.log("mongoDB is connected")
})

mongoose.connection.on("disconnected", () => {
	console.log("mongoDB is disconnected! ")
})
app.listen(6000, () => {
		connect()
		console.log("connected to backend");
	})
	