import Student from "../models/Student.js";
import { tryAndCatch } from "../utils/tryAndCatch.js";

export const addStudent = tryAndCatch(
  async (req, res, next) => {
    const { name, first_name, email } = req.body;
    const data = await Student.create({ name, first_name, email });
    res.status(201).send(data);
  }
);

export const iNameYouBobJohn = tryAndCatch(
  async (req, res, next) => {
    const data = await Student.updateMany(
      { name:"john" }, { name:"bob" }, { new: true }
      );
      res.status(200).send(data);
  }
);

export const getStudents = tryAndCatch(
  async (req, res, next) => {
    const data = await Student.find();
    if (!data) {
      return next( {statusCode:404, message:"No data found."} );
    } else {
      res.status(200).json(data);
    }
  }
);
