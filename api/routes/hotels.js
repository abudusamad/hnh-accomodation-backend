import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();
//CREATE

router.post("/", async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE
router.put("/:id", async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		const updateHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updateHotel);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE
router.delete("/:id", async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel has been deleted");
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET
router.get("/:id", async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json(hotel);
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET ALL
router.put("/", async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		const hotels = await Hotel.find(req.params.id);
		res.status(200).json(hotel);
	} catch (err) {
		res.status(500).json(err);
	}
});

export default router;
