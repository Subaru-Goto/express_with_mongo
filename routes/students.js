import express from "express";
import { addStudent, getStudents, iNameYouBobJohn } from "../controllers/students.js";
export const studentRouter = express.Router();

studentRouter.post("/", addStudent);
studentRouter.get("/", getStudents);
studentRouter.put("/", iNameYouBobJohn);
