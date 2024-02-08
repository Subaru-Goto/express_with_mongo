import "dotenv/config";
import express from "express";
import { connectDatabase } from "./db/client.js";
import { studentRouter } from "./routes/students.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const PORT = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use("/student", studentRouter);
app.use(errorHandler);

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
};

startServer().catch(error => {
  console.log("Failed to start server", error.message)
});
