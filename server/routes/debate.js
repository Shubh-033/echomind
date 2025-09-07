import express from "express";
import { generateDebateResponse } from "../controllers/debateController.js";

const router = express.Router();
router.post("/", generateDebateResponse);

export default router;
