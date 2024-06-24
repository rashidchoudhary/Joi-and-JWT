import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mongoose.connection;
connection.once("connected", () => console.log("Database has Connected..."));
connection.on("error", (error) => console.log("Database Error: ", error));
mongoose.connect("mongodb://localhost:27017/express_jwt");

app.use("/user", userRouter);

app.listen(3000, () => console.log("Server has Started..."));