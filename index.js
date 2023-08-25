import express from "express";
import dotevn from "dotenv"
dotevn.config();
const app = express();
app.listen(8800, () => {
	console.log("connected to backend.");
});
