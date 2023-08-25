import express from "express";
const app = express();
app.listen(9600, () => {
    console.log("connected to backend.")
})