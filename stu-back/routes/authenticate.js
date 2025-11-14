import express from "express";

import signupcontroller from "../controllers/authcontroller.js"


const router = express.Router();

router.get("/signup",(signupcontroller));

export default router;