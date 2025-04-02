import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/user.js";
import routes from "./Routes/Task.js";
import mongoConnect from "./mongoConnect.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));



app.use("/api/user", userRoutes);
app.use("/api/task", routes);

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
    mongoConnect();
});