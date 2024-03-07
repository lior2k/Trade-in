const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");
dotenv.config();

const carsRoute = require("./routes/cars");

// puts the specified middleware functions at the specified path
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));
app.use(cors());
app.use(express.json());
app.use("/api/cars", carsRoute);

const PORT = 8803;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("MongoDB connected successfully");
});
