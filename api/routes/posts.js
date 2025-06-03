import express from "express";
import { addPost } from "../controllers/post.js";
import cors from "cors";

const router = express.Router();

router.get("/test", cors(), addPost);

export default router;
