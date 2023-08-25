import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("This is the auth endpoint of the website");
});

export default router;
