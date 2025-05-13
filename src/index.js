import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import express from "express";

dotenv.config({
  path: './.env'
});

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected successfully!");

    const server = app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });

   
    server.on("error", (error) => {
      console.log("Server error:", error);
    });

  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
