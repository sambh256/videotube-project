import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

import { app } from "./app.js"; 


dotenv.config({
  path: './.env'
});



const startServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected successfully!");

    const PORT = process.env.PORT || 8000;

    const server = app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });

    server.on("error", (error) => {
      console.error("Server error:", error);
    });

  } catch (error) {
    console.error("MONGO DB connection failed!!", error);
    process.exit(1); // Optional: Exit the process if DB fails
  }
};

startServer();
