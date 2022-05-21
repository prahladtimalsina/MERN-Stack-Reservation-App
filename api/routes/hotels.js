import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

//router

router.post("/", createHotel);

//update
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get single hotel

router.get("/:id", getHotel);

//get all hotels

router.get("/", getHotels);

export default router;
