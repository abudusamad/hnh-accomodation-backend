import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js"
import hostelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("connecte to mongoose!");
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

app.use("/api/auth", authRoute);
app.use("/api/hostels", hostelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);


app.get("/", (req, res) => {
	res.send("The first websitet of ");
});
app.listen(8800, () => {
	connect()
	console.log("connected to backend");
});
