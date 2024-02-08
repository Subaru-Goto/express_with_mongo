import Student from "../models/Student.js";
import { tryAndCatch } from "../utils/tryAndCatch.js";

export const addStudent = tryAndCatch(
  async (req, res, next) => {
    const { name, first_name, email } = req.body;
    console.log(req.body)
    const data = await Student.create({ name, first_name, email });
    if (data.length === 0) {
      return next( {statusCode:400, message:"Failed to add a student data."} );
    } else {
      res.status(200).send(data);
    }
  }
);

export const iNameYouBobJohn = tryAndCatch(
  async (req, res, next) => {
    const data = await Student.updateMany(
      { name:"john" }, { name:"bob" }, { new: true }
      );
    if (data.length === 0) {
      return next( {statusCode:400, message:"Failed to add a student data."} );
    } else {
      res.status(201).send(data);
    }
  }
);

export const getStudents = tryAndCatch(
  async (req, res, next) => {
    const data = await Student.find();
    if (data.length === 0) {
      return next( {statusCode:400, message:"Failes to name you bob."} );
    } else {
      res.status(200).send(data);
    }
  }
);
