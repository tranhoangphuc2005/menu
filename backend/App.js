import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import menuRouter from "./routes/menu.route";
import categoryRouter from "./routes/category.route";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/category", categoryRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
